import { Subscription } from 'rxjs';
import { AppletApiService } from '@agunity/provider';
import { Component, OnInit } from '@angular/core';
import { UserProfile, IUserProfile, IIdentity } from '@agunity/models';

interface UserContact extends UserProfile, UserProfile{};

@Component({
  selector: 'lib-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})

export class ExplorePage implements OnInit {
  public identity : IIdentity;

  private _subs: Subscription[] = [];

  constructor(private appletApiService:AppletApiService) { }

//   async ionViewWillEnter() : Promise<void>{
//     this.userContacts = this.appletApiService.store.userProfiles;
//     console.log('------------------------------', this.userContacts)
//     }

  ngOnInit() {
    console.log('MyIdentity: Component ngOnInit');
    this._subs.push(
        this.appletApiService.store
            .ownIdentity$((id) => id)
            .subscribe((v) => {
                this.identity = v;
            }),
    );
  }

 

  search(arr : Array<any>, searchString: string, filterProperty:string) {
  
    const conatctSearchEngine = (moviesArr:Array<any>, searchString: string, filterProperty: any) => {

      searchString = String(searchString)
      const searchArr = searchString.split(' ')
      let matchingArr = new Array()
  
      for (let i = 0; i < moviesArr.length; i++) {
          const movie = moviesArr[i]
  
          const moviePropertyData = String(movie[filterProperty])
          moviePropertyData.replace(',', ' ')
  
          let matchPoints = 0
  
          if (moviePropertyData.length > 0) {
  
              matchPoints = matchScoreAlgorithm(searchArr, moviePropertyData)
  
              if (matchPoints > (Math.floor(searchArr.length) * 15)) {
  
                  matchingArr.push(movie)
              }
          }
  
      }
  
  
      return matchingArr
  
  }
  
  
  const matchScoreAlgorithm = (searchArr:any, productProperty:any) => {
  
      let matchPoints = 0
  
      for (let i = 0; i < searchArr.length; i++) {
  
          const searchWord = searchArr[i].toLowerCase()
          const objectProperty = String(productProperty).toLowerCase()
          const searchWordChar = searchWord.split('')
  
          if (objectProperty.includes(searchWord)) {
  
              matchPoints = matchPoints + 10 + (objectProperty.length - (objectProperty.indexOf(searchWord)))
  
              if (i > 0) {
  
                  const previousSearchWord = searchArr[i - 1].toLowerCase()
  
                  if ((objectProperty.includes(previousSearchWord)) && ((objectProperty.indexOf(searchWord)) > (objectProperty.indexOf(previousSearchWord)))) {
                      matchPoints += 10
                  }
              }
          }
  
  
          let offScore = 0
          let indexArr = []
  
          for (let j = 0; j < searchWordChar.length; j++) {
  
              const char = searchWordChar[j]
  
              if (objectProperty.includes(char)) {
  
                  if (indexArr.length === 0) {
  
                      indexArr.push(objectProperty.indexOf(char))
  
  
                  } else {
  
                      let indexOfPreviousChar = (indexArr[(indexArr.length - 1)])
                      let newIndexOfPreviousChar
  
                      if (char === searchWordChar[j - 1]) {
  
  
                          newIndexOfPreviousChar = indexOfPreviousChar + 1
  
                      } else if (char === searchWordChar[j - 2]) {
  
                          newIndexOfPreviousChar = indexOfPreviousChar
  
                      } else {
  
                          newIndexOfPreviousChar = indexOfPreviousChar > 0 ? indexOfPreviousChar - 1 : indexOfPreviousChar
  
                      }
  
                      let indexofCurrentChar = objectProperty.indexOf(char, newIndexOfPreviousChar)
  
                      if (indexofCurrentChar > -1) {
  
                          indexArr.push(indexofCurrentChar)
  
                      }
  
                      if ((indexofCurrentChar - indexOfPreviousChar) === 1) {
  
  
                      } else if ((indexofCurrentChar - indexOfPreviousChar) === -1) {
  
                          offScore += 5
  
                      } else if ((indexofCurrentChar - indexOfPreviousChar) === 2) {
  
                          offScore += 5
  
                      } else {
  
                          offScore += 10
  
                      }
  
                  }
  
              } else {
  
                  offScore += 5
  
              }
  
          }
  
  
          if (offScore <= (((searchWordChar.length) / 4) * 10)) {
  
              matchPoints += 10
  
          }
  
  
      }
  
      return matchPoints
  }

  return conatctSearchEngine(arr, searchString, filterProperty);
  }

}
