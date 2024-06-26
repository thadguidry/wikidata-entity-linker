# Wikidata Entity Linker Extension

An extension that creates web links for matching inner HTML text based on a regex format of `Q\d+` which is the format of a Wikidata Entity ID.

## How to Install

1. Download this code to your machine.

2. Open Microsoft Edge and go to `edge://extensions`.

3. Enable Developer mode by toggling the switch in the bottom-left corner.

4. Click on "Load unpacked" button and select the "WikidataEntityLinkerExtension" folder.

5. The extension should now appear in your extensions list and be ready for use.

## How to Use

1. After installing the extension, navigate to any webpage with HTML text that matches the regex format `\sQ\d+`

2. The extension will automatically create Wikidata Entity links https://wikidata.org/entity/ for the matching text, such as Q42.

3. Click on the generated links to open them in new tabs.

4. You can also Right Click on generated links and choose "Open link in split screen window" and adjust the middle handle for panel size.  You can then Left Click as normal on entity links and they will open in the secondary split window automatically, allowing you to keep viewing your primary window as you click links within it that will open in the split window.  Boom baby! 

![image](https://github.com/thadguidry/wikidata-entity-linker/assets/986438/8bd4c51e-1914-4cb1-a9a3-dfe785b0efc0)

## How to Test

To test the extension locally, follow the "How to Install" instructions above. Once installed, visit a webpage with text matching the regex format Q\\d+ and verify that the links are created correctly.

## How to Develop

1. Make changes to the extension files as needed.

2. To see the changes, go to `edge://extensions` and click on the "Reload" button for the Wikidata Entity ID Linker Extension.

3. Test the changes by visiting a webpage with matching text and ensuring the links are generated as expected.

## How to Distribute

To distribute the extension, you can package it as a .zip file and submit it to the Microsoft Edge Add-ons store. Refer to the [official Edge extensions overview](https://learn.microsoft.com/en-us/microsoft-edge/extensions-chromium/) for more details.

## Next Steps

Here are some possible next steps to enhance the extension:

- Allow users to customize the link format or destination.
- Implement options to enable/disable the link creation feature.
- Add support for more complex regex patterns and text transformations.
