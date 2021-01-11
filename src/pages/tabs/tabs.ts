import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { CloudPage } from '../cloud/cloud';
import { StatisticsPage } from '../statistics/statistics';
import { ContactPage } from '../contact/contact';
import { ChatPage } from '../chat/chat';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CloudPage;
  tab3Root = StatisticsPage;
  tab4Root = ContactPage;
  tab5Root = ChatPage;
  constructor() {

  }
}
