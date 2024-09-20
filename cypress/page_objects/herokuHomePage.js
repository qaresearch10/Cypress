class Elements {
  addRemoveElements = "Add/Remove Elements";
  basicAuth = "Basic Auth";
  brokenImages = "Broken Images";
  challengingDom = "Challenging DOM";
  checkboxes = "Checkboxes";
  contextMenu = "Context Menu";
  digestAuthentication = "Digest Authentication ";
  disappearingElements = "Disappearing Elements";
  dragAndDrop = "Drag and Drop";
  dropdown = "Dropdown";
  dynamicContent = "Dynamic Content";
  dynamicControls = "Dynamic Controls";
  dynamicLoading = "Dynamic Loading";
  entryAd = "Entry Ad";
  exitIntent = "Exit Intent";
  fileDownload = "File Download";
  fileUpload = "File Upload";
  floatingMenu = "Floating Menu";
  forgotPassword = "Forgot Password";
  formAuthentication = "Form Authentication";
  frames = "Frames";
  geolocation = "Geolocation";
  horizontalSlider = "Horizontal Slider";
  hovers = "Hovers";
  infiniteScroll = "Infinite Scroll";
  inputs = "Inputs";
  javaScriptAlerts = "JavaScript Alerts";
  javaScriptOnLoadEventError = "JavaScript onload event error";
  jQueryUIMenus = "JQuery UI Menus";
  keyPresses = "Key Presses";
  largeAndDeepDOM = "Large & Deep DOM";
  multipleWindows = "Multiple Windows";
  nestedFrames = "Nested Frames";
  notificationMessages = "Notification Messages";
  redirectLink = "Redirect Link";
  secureFileDownload = "Secure File Download";
  shadowDOM = "Shadow DOM";
  shiftingContent = "Shifting Content";
  slowResources = "Slow Resources";
  sortableDataTables = "Sortable Data Tables";
  statusCodes = "Status Codes";
  typos = "Typos";
  wysiwygEditor = "WYSIWYG Editor";
}

class herokuHomePage {
  constructor() {
    this.elements = new Elements(); // Assign Elements as a property
  }

  // Methods
  visitHomePage() {
    cy.visit("https://the-internet.herokuapp.com");
  }

  navigateToExamples(element) {
    // Click on the element based on the text provided
    cy.contains(element).click();
  }
}

export default new herokuHomePage();
