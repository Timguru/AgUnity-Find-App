import { AppletApiService } from '@agunity/provider';
import { Component, OnInit } from '@angular/core';
import { UserProfile, IUserProfile } from '@agunity/models';

interface UserContact extends UserProfile, UserProfile{};

@Component({
  selector: 'lib-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})

export class ExplorePage implements OnInit {
  public userContacts : UserContact[];

  constructor(private appletApiService:AppletApiService) { }

  ngOnInit() {
    this.userContacts = this.appletApiService.store.userProfiles;
  }

}
