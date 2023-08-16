import { Component } from '@angular/core';
import { COMMON_NAMES } from '../common-names';
import { MentionConfig } from 'angular-mentions';

@Component({
  selector: 'app-demo-config',
  templateUrl: './demo-config.component.html'
})
export class DemoConfigComponent {

  complexItems = [
    {
      "value" : "user 1",
      "email": "user1@domain.com",
      "name": "User One"
    },
    {
      "value" : "user 2",
      "email": "user2@domain.com",
      "name": "User Two"
    },
    {
      "value" : "user 3",
      "email": "user3@domain.com",
      "name": "User Three"
    }
  ];

  format(item:any) {
    return `<span class='mention'>${item['value'].toUpperCase()}</span>`;
  }

  filter(searchString: string, items: any[]): any[] {
    return items.filter(item => item.name.toLowerCase().includes(searchString));
  }

  mentionConfig:MentionConfig = {
    mentions: [
      {
        items: this.complexItems,
        labelKey: 'name',
        triggerChar: '#',
        mentionSelect: this.format,
        mentionFilter: this.filter,
        format: 'html'
      },
      {
        items: COMMON_NAMES,
        triggerChar: '@'
      }
    ]
  };

oninput(event: any) 
{
  console.log(event.target.innerHTML);
}
  addUser() {
    let next = this.complexItems.length+1;
    this.complexItems.push({
      "value" : "user"+next,
      "email": "user"+next+"@domain.com",
      "name": "User "+next
    });
    this.mentionConfig = Object.assign({}, this.mentionConfig);
  }
}
