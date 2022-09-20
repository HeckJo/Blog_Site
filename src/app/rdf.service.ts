import { Injectable } from '@angular/core';
import { foaf } from 'rdf-namespaces';
import { getSolidDataset,
  saveSolidDatasetAt,
  getThing,
  getStringNoLocale,
  getUrlAll,
  getResourceInfo,
  getThingAll,
  Thing
} from '@inrupt/solid-client';
import { SCHEMA_INRUPT,
  VCARD
} from '@inrupt/vocab-common-rdf';
import { handleIncomingRedirect,
  login,
  fetch,
  getDefaultSession,
  Session
} from '@inrupt/solid-client-authn-browser'
import { session } from 'rdf-namespaces/dist/link';
import { style } from '@angular/animations';
import { NgForOf } from '@angular/common';
import { DateTime } from 'rdf-namespaces/dist/schema';
@Injectable({
  providedIn: 'root'
})

export class RdfService {
  exampleSolidDatasetURL = 'https://heckejo.solidcommunity.net/profile/card';
  webId : any = "";

  async loginAndFetch() {    
    await handleIncomingRedirect();
    if (!getDefaultSession().info.isLoggedIn) {
      await login({
        oidcIssuer: "https://solidcommunity.net",
        redirectUrl: window.location.href,
        clientName: "My application"
      });
    }
    this.updatePage();
  }

  getHostServer() {
    if (getDefaultSession().info.isLoggedIn) {
      this.webId = getDefaultSession().info.webId;
      return this.webId.substring(this.webId.indexOf('.')+1, this.webId.indexOf('.net/')+4);
    } else {
      return "Not Served!";
    }
  }

  getUsername(){
    try {
      if (getDefaultSession().info.isLoggedIn) {
        this.webId = getDefaultSession().info.webId;
        return (this.webId.substring(this.webId.indexOf('://')+3, this.webId.indexOf('.')));
      } else {
        return "Not Me!"
      }
    } catch (error) {
      return "false";
    }
  }

  /* returns array of existing categories*/
  arrayCategories(){
    return ["0","1","2","3"];
    /**
    let t : String = "";
    /*check if User is logged in*/
    /**try {
      if (await getDefaultSession().info.isLoggedIn) {
        t = await getDefaultSession().info.webId!;
      }
    } catch (error) {
      return null;
    }
    /* get Container of all categories */
    /**let categoriesUrl = t.substring(0, t.indexOf('.net/')+5) + 'information/';
    let docURL = new URL(categoriesUrl);
    docURL.hash = "";
    /* get count of all things (-1 for description of container) */
    /**let allData = await getSolidDataset(docURL.href);
    let categories = await getThingAll(allData);
    let a : [String] = ["0"];
    for (let i = 1 ;i<categories.length;i++){
      a.push("" + i);
    }
    return a;*/
  }

  async updatePage(){
    document.getElementById("categoryCountDiv")!.style.display = "";
  }



  /* usefull code snippets */
  
  async lastEntry (){
    this.webId = 'https://heckejo.solidcommunity.net/information/';
    let myDataset;
    const profileDocumentUrl = new URL(this.webId);
    profileDocumentUrl.hash = "";
    try {
      if (getDefaultSession().info.isLoggedIn) {
        myDataset = await getSolidDataset(profileDocumentUrl.href, { fetch: getDefaultSession().fetch });
      } else {
        alert("not logged in");
        myDataset = await getSolidDataset(profileDocumentUrl.href);
      }
    } catch (error) {
      return null;
    }
    let profile = await getThing(myDataset, this.webId);
    let erg = (await getStringNoLocale(profile!, foaf.name) + " This is the username.")!;
    return erg;
  }
}
