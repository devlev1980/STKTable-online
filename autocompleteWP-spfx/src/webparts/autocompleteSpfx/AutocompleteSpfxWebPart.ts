import {Version} from '@microsoft/sp-core-library';
import {BaseClientSideWebPart, IPropertyPaneConfiguration, PropertyPaneTextField,} from '@microsoft/sp-webpart-base';

import * as strings from 'AutocompleteSpfxWebPartStrings';

/** Include Angular Elements JS and Style */
import 'autocomplete-wp/dist/autocompleteWP/bundle.js';

require('../../../node_modules/autocomplete-wp/dist/autocompleteWP/styles.css');

export interface IAutocompleteSpfxWebPartProps {
  description: string;
}

export default class AutocompleteSpfxWebPart extends BaseClientSideWebPart<IAutocompleteSpfxWebPartProps> {


  public render(): void {

    this.domElement.innerHTML = `<app-autocomplete-spfx-web-part  description="${this.properties.description}"></app-autocomplete-spfx-web-part>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
