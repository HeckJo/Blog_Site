import { Injectable } from '@angular/core';
import { foaf } from 'rdf-namespaces';
import { getSolidDataset,
  saveSolidDatasetAt,
  getThing,
  getStringNoLocale,
  getUrlAll
} from '@inrupt/solid-client';
import { SCHEMA_INRUPT } from '@inrupt/vocab-common-rdf';
import { handleIncomingRedirect,
  login,
  fetch,
  getDefaultSession,
  Session
} from '@inrupt/solid-client-authn-browser'
import { session } from 'rdf-namespaces/dist/link';

@Injectable({
  providedIn: 'root'
})

export class RdfService {

  exampleSolidDatasetURL = 'https://heckejo.inrupt.net/profile/card';
  webId : any = "";

  async loginAndFetch() {    
    await handleIncomingRedirect();
    if (!getDefaultSession().info.isLoggedIn) {
      alert("login now!");
      await login({
        oidcIssuer: "https://login.inrupt.com",
        redirectUrl: window.location.href,
        clientName: "My application"
      });
    }
  }

  getHostServer() {
    if (getDefaultSession().info.isLoggedIn) {
      this.webId = getDefaultSession().info.webId;
      return this.webId.substring(0, this.webId.indexOf('.com/')+4);
    } else {
      return "Not Me!";
    }
  }

  getUsername(){
    if (getDefaultSession().info.isLoggedIn) {
      this.webId = getDefaultSession().info.webId;
      return this.webId.substring(this.webId.indexOf('.com/')+5, this.webId.length);
    } else {
      return "Not Served!";
    }
  }

  async lastEntry (category : string){
    this.webId = getDefaultSession().info.webId;
    
    let myDataset;
    const profileDocumentUrl = new URL(this.webId);
    profileDocumentUrl.hash = "";
    try {
      if (getDefaultSession().info.isLoggedIn) {
        myDataset = await getSolidDataset(profileDocumentUrl.href, { fetch: getDefaultSession().fetch });
      } else {
        myDataset = await getSolidDataset(profileDocumentUrl.href);
      }
    } catch (error) {
      return false;
    }

    return category;
  }

  constructor() { }
}
