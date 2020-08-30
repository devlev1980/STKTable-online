import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {SharepointService} from '../services/sharepoint.service';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-autocomplete-spfx-web-part',
  templateUrl: './autocomplete-spfx-web-part.component.html',
  styleUrls: ['./autocomplete-spfx-web-part.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteSpfxWebPartComponent implements OnInit {
  @Input() description: string;
  profiles: IProfile[] = [];
  profiles$: Observable<any>;
  selectedEmployee: any;
  userProfiles: any;
  showUsers: boolean = false;
  selectedUser: string;
  inputForm: FormGroup;
  @ViewChild('username') userName: ElementRef;
  @ViewChild('autocomplete') autoComplete: ElementRef;
  searchIcon: string = environment.searchICon;


  @HostListener('document:click', ['$event'])
  handleOutsideClick(event) {
    if (!this.autoComplete.nativeElement.contains(event.target)) {
      this.showUsers = false;
    }
  }

  constructor(private spService: SharepointService, private renderer: Renderer2, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.spService.getProfiles()
      .subscribe(data => {
        this.getFields(data);
      });


  }

  getFields(profiles) {
    console.log('Data from service', profiles);
    for (const profile of profiles) {
      const profileObject: IProfile = {FirstName: '', LastName: '', PictureUrl: '', Cell: '', WorkEmail: ''};
      for (const j of profile) {
        if ((j.Key === 'FirstName' && j.Value !== '') ||
          (j.Key === 'WorkEmail' && j.Value !== null) ||
          (j.Key === 'PictureUrl' && j.Value !== null) ||
          (j.Key === 'LastName' && j.Value !== null)) {
          profileObject[j.Key] = j.Value;
          this.profiles.push(profileObject);
        }
      }
    }
    this.profiles = this.profiles.filter((item, index) => this.profiles.indexOf(item) === index);
    console.log('Filtered', this.profiles)
  }

  onInput() {
    this.showUsers = true;
    setTimeout(() => {
      const charToHighlight = document.querySelector('.user__info-name span.highlight');
      if (charToHighlight) {
        this.renderer.setStyle(charToHighlight, 'color', '#fff');
      }
    }, 0);
  }

  onSelectUser(user: IProfile) {
    this.selectedUser = user.FirstName + ' ' + user.LastName ;
    this.showUsers = false;
  }
}

interface IProfile {
  FirstName: string;
  LastName: string;
  WorkEmail: string;
  PictureUrl: string;
  Cell: string;
}
