/* eslint-disable no-bitwise, no-undef */

// Get Latest from http://www.unicode.org/Public/cldr/25/
Soho.Locale.addCulture('hi-IN', {
  // layout/language
  language: 'hi',
  englishName: 'Hindi (India)',
  nativeName: 'हिंदी (भारत)',
  // layout/orientation/@characters
  direction: 'left-to-right',
  // ca-gregorian
  calendars: [{
    name: 'gregorian',
    // ca-gregorian/main/dates/calendars/gregorian/dateFormats/
    dateFormat: {
      separator: '-', // Infered
      timeSeparator: ':',
      short: 'dd-MM-yyyy', // use four digit year
      medium: 'dd-MM-yyyy',
      long: 'd MMMM yyyy',
      full: 'EEEE, d MMMM yyyy',
      month: 'd MMMM',
      year: 'MMMM, yyyy',
      timestamp: 'h:mm:ss',
      datetime: 'd-M-yyyy h:mm a',
      timezone: 'd-M-yyyy h:mm a zz',
      timezoneLong: 'd-M-yyyy h:mm a zzzz'
    }, // Infered short + short gregorian/dateTimeFormats
    // ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
    days: {
      wide: ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'],
      abbreviated: ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
      narrow: ['र', 'सो', 'मं', 'बु', 'गु', 'शु', 'श']
    },
    // ca-gregorian/main/dates/calendars/gregorian/months/format/wide
    months: {
      wide: ['जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'],
      abbreviated: ['ज', 'फ़', 'मा', 'अ', 'म', 'जू', 'जु', 'अ', 'सि', 'अ', 'न', 'दि']
    },
    // ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
    timeFormat: 'h:mm a',
    // ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
    dayPeriods: ['पूर्व', 'अपर']
  }],
  // numbers/currencyFormats-numberSystem-latn/standard
  currencySign: '₹',
  currencyFormat: '"¤#,##,##0.00',
  // numbers/symbols-numberSystem-latn
  numbers: {
    percentSign: '%',
    percentFormat: '#,##0 %',
    minusSign: '-',
    decimal: '.',
    group: ','
  },
  // Resx - Provided By Translation Team
  messages: {
    AboutText: { id: 'AboutText', value: 'Infor &copy; {0} कॉपीराइट| सर्वाधिकार सुरक्षित| यहाँ दिए गए शब्द और डिज़ाइन मार्क्स Infor और/या Infor के सहयोगियों और संबंधित सहायकों के लिए सेट किये गए ट्रेडमार्क्स और/या पंजीकृत ट्रेडमार्क्स हैं| सर्वाधिकार सुरक्षित| यहाँ सूचित किये गए अन्य सभी ट्रेडमार्क्स उनके सम्बंधित स्वामियों की संपत्ति है|' },
    Actions: { id: 'Actions', value: 'क्रियाएँ', comment: 'Tooltip text for the action button with additional in context actions' },
    AdditionalItems: { id: 'AdditionalItems', value: 'अतिरिक्त वस्तुएँ', comment: 'Button tooltip used in a list of movable items' },
    Add: { id: 'Add', value: 'जोड़ें', comment: 'Add' },
    AddComments: { id: 'AddComments', value: 'टिप्पणी जोड़ें', comment: 'Add comments to a form of data' },
    AddNewTab: { id: 'AddNewTab', value: 'नया टैब जोड़ें', comment: 'Attached to a button that adds new tabs' },
    AdministrativeLeave: { id: 'AdministrativeLeave', value: 'व्यवस्थापक छुट्टी', comment: 'As in vacation time from work' },
    AdvancedFilter: { id: 'AdvancedFilter', value: 'अग्रवर्ती फ़िल्टर बनाएँ', comment: 'In a data grid active an advanced filtering feature' },
    Alert: { id: 'Alert', value: 'चेतावनी', comment: 'Alert' },
    AlertOnPage: { id: 'AlertOnPage', value: 'पृष्ठ पर चेतावनी संदेश', comment: 'Alert message(s) on page n' },
    All: { id: 'All', value: 'सभी', comment: 'All items in the context of a filter' },
    AllResults: { id: 'AllResults', value: 'के लिए सभी परिणाम', comment: 'Search Results Text' },
    AligntoBottom: { id: 'AligntoBottom', value: 'नीचे से संरेखित', comment: 'Align to Bottom tooltip' },
    AlignCenterHorizontally: { id: 'AlignCenterHorizontally', value: 'क्षैतिज संरेखित मध्य', comment: 'Align Center Horizontally tooltip' },
    Amber: { id: 'Amber', value: 'अंबर', comment: 'Color in our color pallette' },
    Amethyst: { id: 'Amethyst', value: 'बिल्लौर', comment: 'Color in our color pallette' },
    Apply: { id: 'Apply', value: 'लागू करें', comment: 'Text in a button to apply an action' },
    AppMenuTriggerText: { id: 'AppMenuTriggerText', value: 'मेनू', comment: 'Text in a special Module Tab used to trigger an Application Menu open or closed' },
    Attach: { id: 'Attach', value: 'अनुलग्न करें', comment: 'Attach' },
    Available: { id: 'Available', value: 'उपलब्ध', comment: 'Button tooltip used in a list of movable items' },
    Azure: { id: 'Azure', value: 'नभोनील', comment: 'Color in our color pallette' },
    BackgroundColor: { id: 'BackgroundColor', value: 'पृष्ठभूमि रंग', comment: 'add or edit text background color in the editor' },
    Between: { id: 'Between', value: 'के बीच', comment: 'Between in icons for filtering' },
    Blockquote: { id: 'Blockquote', value: 'कोट अवरोधित करें', comment: 'insert a block quote in the editor' },
    Bold: { id: 'Bold', value: 'बोल्ड', comment: 'Make text Bold' },
    Bookmarked: { id: 'Bookmarked', value: 'बुकमार्क किए', comment: 'Bookmark filled - Element is already bookmarked' },
    BookmarkThis: { id: 'BookmarkThis', value: 'यह बुकमार्क करें', comment: 'Bookmark an element' },
    Breadcrumb: { id: 'Breadcrumb', value: 'ब्रेडक्रम्ब', comment: 'Text describing the Breadcrumb' },
    Browser: { id: 'Browser', value: 'ब्राउज़र', comment: 'As in a Web Browser' },
    BulletedList: { id: 'BulletedList', value: 'बुलेटेड सूची', comment: 'Bulleted List tooltip' },
    Calendar: { id: 'Calendar', value: 'कैलेंडर', comment: 'Inline Text for the title of the Calendar control' },
    Camera: { id: 'Camera', value: 'कैमरा', comment: 'Camera tooltip' },
    Cancel: { id: 'Cancel', value: 'रद्द करें', comment: 'Cancel tooltip' },
    CapsLockOn: { id: 'CapsLockOn', value: 'कैप्स लॉक चालू है', comment: 'Caps Lock On message' },
    Cart: { id: 'Cart', value: 'कार्ट', comment: 'Cart tooltip' },
    CenterText: { id: 'CenterText', value: 'मध्य', comment: 'An Icon Tooltip' },
    CharactersLeft: { id: 'CharactersLeft', value: 'बचे हुए वर्ण {0}', comment: 'indicator showing how many more characters you can type.' },
    CharactersMax: { id: 'CharactersMax', value: 'वर्ण की अधिकतम गिनती ', comment: 'indicator showing how many max characters you can type.' },
    ChangeSelection: { id: 'ChangeSelection', value: '. चयन को परिवर्तित करने के लिए एरो की का उपयोग करें।', comment: 'Audible Text for drop down list help' },
    ChangeView: { id: 'ChangeView', value: 'दृश्य बदलें', comment: 'Change the current page from a list of options' },
    Checkbox: { id: 'Checkbox', value: 'चेकबॉक्स', comment: 'Checkbox tooltip' },
    Checked: { id: 'Checked', value: 'जाँच हुआ', comment: 'Checked tooltip' },
    Clear: { id: 'Clear', value: 'क्लियर करें', comment: 'Tooltip for a Clear Action' },
    ClearFilter: { id: 'ClearFilter', value: 'फ़िल्टर क्लियर करें', comment: 'Clear the current filter criteria' },
    ClearFormatting: { id: 'ClearFormatting', value: 'फ़िल्टर क्लियर करें', comment: 'Clear the formatting in editor' },
    ClearSelection: { id: 'ClearSelection', value: '(समस्त क्लियर करें)', comment: 'clear dropdown selection' },
    Clock: { id: 'Clock', value: 'घड़ी', comment: 'Clock tooltip' },
    Close: { id: 'Close', value: 'बंद करें', comment: 'Tooltip for a Close Button Action' },
    Clickable: { id: 'Clickable', value: 'संपादक में क्लिकेबल', comment: 'Clickable in editor' },
    Copy: { id: 'Copy', value: 'प्रतिलिपि बनाएँ', comment: 'Copy tooltip' },
    Collapse: { id: 'Collapse', value: 'संक्षिप्त करें', comment: 'Collapse / close a tree/submenu' },
    CollapseAppTray: { id: 'CollapseAppTray', value: 'ऐप ट्रे संक्षिप्त करें', comment: 'Collapse App Tray tooltip' },
    Columns: { id: 'Columns', value: 'स्तंभ', comment: 'Columns tooltip' },
    Comments: { id: 'Comments', value: 'टिप्पणियाँ', comment: 'Comments on an form' },
    CompanyHoliday: { id: 'CompanyHoliday', value: 'कंपनी अवकाश', comment: 'A holiday provided by work.' },
    Component: { id: 'Component', value: 'घटक', comment: 'As in a UI component - building block.' },
    Compose: { id: 'Compose', value: 'लिखें', comment: 'Compose tooltip' },
    Completed: { id: 'Completed', value: 'समाप्त', comment: 'Text For a Completed Status' },
    Confirm: { id: 'Confirm', value: 'पुष्टि करें', comment: 'Confirm tooltip' },
    ConfirmOnPage: { id: 'ConfirmOnPage', value: 'पृष्ठ पर संदेश पुष्टि करें', comment: 'Confirm message(s) on page n' },
    CookiesEnabled: { id: 'CookiesEnabled', value: 'कुकीज सक्रिय', comment: 'Returns if browser cookies are enabled or not.' },
    Contains: { id: 'Contains', value: 'शामिल', comment: 'Contains in icons for filtering' },
    CssClass: { id: 'CssClass', value: 'Css वर्ग', comment: 'Label for entering a Css Class name' },
    Cut: { id: 'Cut', value: 'काटें', comment: 'Cut tooltip' },
    Date: { id: 'Date', value: 'दिनांक', comment: 'Describes filtering by a date data type' },
    Day: { id: 'Day', value: 'दिन', comment: 'Shows view with day events' },
    Days: { id: 'Days', value: 'दिन ', comment: 'Show how many days until an event' },
    DaysOverdue: { id: 'DaysOverdue', value: '{0} दिन विलंबित', comment: 'For a task /date UI' },
    DaysRemaining: { id: 'DaysRemaining', value: '{0} दिन शेष', comment: 'For a task /date UI' },
    Delete: { id: 'Delete', value: 'हटाएँ', comment: 'Delete Toolbar Action Tooltip' },
    DeviceName: { id: 'Device', value: 'उपकरण', comment: 'Name of the Device' },
    DistributeHoriz: { id: 'DistributeHoriz', value: 'क्षैतिज रूप से वितरित करें', comment: 'Icon button tooltip for action that distributes elements across Horizontally' },
    Document: { id: 'Document', value: 'दस्तावेज़', comment: 'Document tooltip' },
    DiscretionaryTimeOff: { id: 'DiscretionaryTimeOff', value: 'विवेकाधीन टाइम ऑफ़', comment: 'As in work time off' },
    Dirty: { id: 'Dirty', value: 'पंक्ति परिवर्तित हुआ है', comment: 'Record is dirty / modified' },
    Drilldown: { id: 'Drilldown', value: 'ड्रिल डाउन', comment: 'Drill by moving page flow into a record' },
    Drillup: { id: 'Drillup', value: 'ड्रिल अप', comment: 'Opposite of Drilldown, move back up to a larger set of records' },
    Dropdown: { id: 'Dropdown', value: 'ड्रॉपडाउन', comment: 'Dropdown' },
    DoesNotContain: { id: 'DoesNotContain', value: 'शामिल नहीं है', comment: 'Does Not Contain in icons for filtering' },
    DoesNotEndWith: { id: 'DoesNotEndWith', value: 'के साथ अंत नहीं होता है', comment: 'For condition filtering' },
    DoesNotEqual: { id: 'DoesNotEqual', value: 'के बराबर नहीं है', comment: 'Does Not Equal in icons for filtering' },
    DoesNotStartWith: { id: 'DoesNotStartWith', value: 'के साथ प्रारंभ नहीं होता है', comment: 'For condition filtering' },
    Down: { id: 'Down', value: 'नीचे', comment: 'Down tooltip' },
    Download: { id: 'Download', value: 'डाउनलोड', comment: 'Download tooltip' },
    Duplicate: { id: 'Duplicate', value: 'प्रतिलिपि करें', comment: 'Duplicate tooltip' },
    EitherSelectedOrNotSelected: { id: 'EitherSelectedOrNotSelected', value: 'चयनित किया गया या चयनित नहीं किया गया', comment: 'Either Selected Or NotSelected in icons for filtering' },
    EndsWith: { id: 'EndsWith', value: 'के साथ अंत होता है', comment: 'for condition filtering' },
    EnterComments: { id: 'EnterComments', value: 'टिप्पणी यहाँ दर्ज करें...', comment: 'Placeholder text for a text input (comments)' },
    Error: { id: 'Error', value: 'त्रुटि', comment: 'Title, Spoken Text describing fact an error has occured' },
    ErrorAllowedTypes: { id: 'ErrorAllowedTypes', value: 'फ़ाइल प्रकार की अनुमति नहीं है', comment: 'Error string for file-upload' },
    ErrorMaxFileSize: { id: 'ErrorMaxFileSize', value: 'फ़ाइल आकार की सीमा पार हो गई', comment: 'Error string for file-upload' },
    ErrorMaxFilesInProcess: { id: 'ErrorMaxFilesInProcess', value: 'फ़ाइलें की अधिकतम अनुमति सीमा पार हो गई', comment: 'Error string for file-upload' },
    ErrorOnPage: { id: 'ErrorOnPage', value: 'पृष्ठ पर त्रुटि संदेश', comment: 'Error message(s) on page n' },
    EmailValidation: { id: 'EmailValidation', value: 'ईमेल पता मान्य नहीं है', comment: 'This the rule for email validation' },
    Emerald: { id: 'Emerald', value: 'एमराल्ड', comment: 'Color in our color pallette' },
    Expand: { id: 'Expand', value: 'विस्तृत करें', comment: 'Expand open a tree/submenu' },
    ExpandAppTray: { id: 'ExpandAppTray', value: 'ऐप ट्रे विस्तृत करें', comment: 'ExpandAppTray tooltip' },
    ExpandCollapse: { id: 'ExpandCollapse', value: 'विस्तृत करें / संक्षिप्त करें', comment: 'Text to toggle a button in a container.' },
    ExportAsSpreadsheet: { id: 'ExportAsSpreadsheet', value: 'स्प्रेडशीट के रूप में निर्यात करें', comment: 'Export as Spreadsheet tooltip' },
    Edit: { id: 'Edit', value: 'संपादित करें', comment: 'Edit tooltip' },
    Equals: { id: 'Equals', value: 'के बराबर है', comment: 'Equals in icons for filtering' },
    Event: { id: 'Event', value: 'इवेंट', comment: 'As in an event that would be in a calendar' },
    ExitFullView: { id: 'ExitFullView', value: 'फ़ुल दृश्य निकास', comment: 'Exit Full View tooltip' },
    Export: { id: 'Export', value: 'निर्यात', comment: 'Export tooltip' },
    ExportToExcel: { id: 'ExportToExcel', value: 'एक्सेल में निर्यात करें', comment: 'Export To Excel menu option in datagrid' },
    Favorite: { id: 'Favorite', value: 'पसंदीदा', comment: 'A favorite item' },
    FileUpload: { id: 'FileUpload', value: 'फ़ाइल अपलोड| एक फ़ाइल ब्राउज़ करने के लिए एंट्रर दबाएँ', comment: 'Screen Reader instructions' },
    FieldFilter: { id: 'FieldFilter', value: 'फील्ड फ़िल्टर', comment: 'Used for Field Filter' },
    Filter: { id: 'Filter', value: 'फ़िल्टर करें', comment: 'Filter tooltip' },
    FirstPage: { id: 'FirstPage', value: 'प्रथम पृष्ठ', comment: 'First Page tooltip' },
    Folder: { id: 'Folder', value: 'फ़ोल्डर', comment: 'Folder tooltip' },
    From: { id: 'From', value: 'से', comment: 'Start of a range (of dates)' },
    FullView: { id: 'FullView', value: 'फ़ुल दृश्य', comment: 'Full View tooltip' },
    GoForward: { id: 'GoForward', value: 'आगे जाएँ', comment: 'Move Page / object this direction' },
    GoBack: { id: 'GoBack', value: 'पीछे जाएँ', comment: 'Move Page / object this directionp' },
    GoDown: { id: 'GoDown', value: 'नीचे जाएँ', comment: 'Move Page / object this directionp' },
    GoUp: { id: 'GoUp', value: 'उपर जाएँ', comment: 'Move Page / object this direction' },
    Go: { id: 'Go', value: 'जाएँ', comment: 'Go, perform a movement, start a search, move to the next "thing" in a workflow.' },
    Graphite: { id: 'Graphite', value: 'ग्रेफाइट', comment: 'Color in our color pallette' },
    GreaterOrEquals: { id: 'GreaterOrEquals', value: 'से अधिक या बराबर', comment: 'Greater Than Or Equals in icons for filtering' },
    GreaterThan: { id: 'GreaterThan', value: 'से अधिक', comment: 'Greater Than in icons for filtering' },
    Grid: { id: 'Grid', value: 'ग्रिड', comment: 'Grid tooltip' },
    Hour: { id: 'Hour', value: 'घंटा', comment: 'the hour portion of a time' },
    Hours: { id: 'Hours', value: 'घंटे', comment: 'the hour portion of a time (plural)' },
    HeadingThree: { id: 'HeadingThree', value: 'तीसरा शीर्षक', comment: 'Heading Three tooltip' },
    HeadingFour: { id: 'HeadingFour', value: 'चौथा शीर्षक', comment: 'Heading Four tooltip' },
    Highest: { id: 'Highest', value: 'उच्चतम', comment: 'Highest Four tooltip' },
    Home: { id: 'Home', value: 'मुख', comment: 'Home tooltip' },
    HtmlView: { id: 'HtmlView', value: 'Html दृश्य', comment: 'Html View tooltip' },
    Image: { id: 'Image', value: 'छवि', comment: 'Image of something' },
    Import: { id: 'Import', value: 'आयात', comment: 'Import tooltip' },
    Info: { id: 'Info', value: 'जानकारी', comment: 'Info tooltip' },
    InfoOnPage: { id: 'InfoOnPage', value: 'पृष्ठ पर जानकारी संदेश', comment: 'Information message(s) on page n' },
    InProgress: { id: 'In Progress', value: 'प्रगति में', comment: 'Info tooltip that an action is in progress' },
    Insert: { id: 'Insert', value: 'सम्मिलित करें', comment: 'Insert Modal Dialog Button' },
    InsertAnchor: { id: 'InsertAnchor', value: 'एंकर सम्मिलित करें', comment: 'Insert Acnhor (link) in an editor' },
    InsertImage: { id: 'InsertImage', value: 'छवि सम्मिलित करें', comment: 'Insert Image in an editor' },
    InsertLink: { id: 'InsertLink', value: 'लिंक सम्मिलित करें', comment: 'Insert Link in an editor' },
    InsertUrl: { id: 'InsertUrl', value: 'Url सम्मिलित करें', comment: 'Insert a Url in an editor' },
    Italic: { id: 'Italic', value: 'तिरछा', comment: 'Make Text Italic' },
    InvalidDate: { id: 'InvalidDate', value: 'अमान्य दिनांक', comment: 'validation message for wrong date format (short)' },
    InvalidTime: { id: 'InvalidTime', value: 'अमान्य समय', comment: 'validation message for wrong time format' },
    Inventory: { id: 'Inventory', value: 'वस्तुसूची', comment: 'Icon button tooltop for Inventory Action' },
    InRange: { id: 'InRange', value: 'सीमा में', comment: 'In Range in icons for filtering' },
    IsEmpty: { id: 'IsEmpty', value: 'खाली है', comment: 'Is Empty in icons for filtering' },
    IsNotEmpty: { id: 'IsNotEmpty', value: 'खाली नहीं है', comment: 'Is Not Empty in icons for filtering' },
    ItemsSelected: { id: 'ItemsSelected', value: 'चयनित वस्तुएँ', comment: 'Num of Items selected for swaplist' },
    JustifyCenter: { id: 'JustifyCenter', value: 'मध्य', comment: 'justify text to center in the editor' },
    JustifyLeft: { id: 'JustifyLeft', value: 'बाएँ में संरेखित करें', comment: 'justify text to left in the editor' },
    JustifyRight: { id: 'JustifyRight', value: 'दाईं में संरेखित करें', comment: 'justify text to right in the editor' },
    Keyword: { id: 'Keyword', value: 'खोजशब्द', comment: 'Describes filtering by a keyword search' },
    Launch: { id: 'Launch', value: 'प्रारंभ करें', comment: 'Launch' },
    LastPage: { id: 'LastPage', value: 'अंतिम पृष्ठ', comment: 'Last Page tooltip' },
    Left: { id: 'Left', value: 'बाएँ', comment: 'Left tooltip' },
    Legend: { id: 'Legend', value: 'लेजेंड', comment: 'As in a chart legend' },
    LessOrEquals: { id: 'LessOrEquals', value: 'से कम या बराबर', comment: 'Less Than Or Equals in icons for filtering' },
    LessThan: { id: 'LessThan', value: 'से कम', comment: 'Less Than in icons for filtering' },
    Link: { id: 'Link', value: 'लिंक', comment: 'Link - as in hyperlink - icon tooltop' },
    Load: { id: 'Load', value: 'लदान', comment: 'Load icon tooltip' },
    Loading: { id: 'Loading', value: 'लोड हो रहा है', comment: 'Text below spinning indicator to indicate loading' },
    Locale: { id: 'Locale', value: 'लोकेल', comment: 'The users locale string for example en-US, it-It' },
    Locked: { id: 'Locked', value: 'लॉक्ड', comment: 'Locked tooltip' },
    Logout: { id: 'Logout', value: 'लॉग आउट', comment: 'Log out of the application' },
    Lookup: { id: 'Lookup', value: 'लुकअप', comment: 'Lookup - As in looking up a record or value' },
    Lowest: { id: 'Lowest', value: 'निम्नतम', comment: 'Lowest - As in Lowest value' },
    Mail: { id: 'Mail', value: 'मेल', comment: 'Mail tooltip' },
    MapPin: { id: 'MapPin', value: 'पिन करें', comment: 'Map Pin tooltip' },
    Maximize: { id: 'Maximize', value: 'बड़ा करें', comment: 'Maximize a screen or dialog in the UI' },
    Median: { id: 'Median', value: 'मंझला', comment: 'Median in Mathematics' },
    Medium: { id: 'Medium', value: 'मध्यम', comment: 'Describes a Medium sized Row Height in a grid/list' },
    Menu: { id: 'Menu', value: 'मेनू', comment: 'Menu tooltip' },
    MingleShare: { id: 'MingleShare', value: 'Ming.le के साथ शेयर करें', comment: 'Share the contextual object/action in the mingle system' },
    Minutes: { id: 'Minutes', value: 'मिनट्स', comment: 'the minutes portion of a time' },
    Minimize: { id: 'Minimize', value: 'छोटा करें', comment: 'Minimize tooltip' },
    Minus: { id: 'Minus', value: 'माइनस', comment: 'Minus tooltip' },
    Mobile: { id: 'Mobile', value: 'मोबाइल', comment: 'Indicates a mobile device (phone tablet ect)' },
    Month: { id: 'Month', value: 'महीने', comment: 'As in a date month' },
    More: { id: 'More', value: 'अधिक...', comment: 'Text Indicating More Buttons or form content' },
    MoreActions: { id: 'MoreActions', value: 'और क्रियाएँ', comment: 'Text on the More Actions button indictating hidden functions' },
    MoveToLeft: { id: 'MoveToLeft', value: 'बाएँ मूव करें', comment: 'Button tooltip used in a list of movable items' },
    MoveToRight: { id: 'MoveToRight', value: 'दाहिना मूव करें', comment: 'Button tooltip used in a list of movable items' },
    MsgDirty: { id: 'MsgDirty', value: ', संशोधित किया', comment: 'for modified form fields' },
    New: { id: 'New', value: 'नया', comment: 'Add new rowstatus in datagrid' },
    NewDocument: { id: 'NewDocument', value: 'नया दस्तावेज़', comment: 'New Document tooltip' },
    NewItem: { id: 'NewItem', value: 'नई वस्तु', comment: 'New item in listbuilder' },
    NewWindow: { id: 'NewWindow', value: 'नई विंडो', comment: 'Contents open in a new browser window.' },
    Next: { id: 'Next', value: 'अगला', comment: 'Next in icons tooltip' },
    NextPage: { id: 'NextPage', value: 'अगला पृष्ठ', comment: 'Next on Pager' },
    NextMonth: { id: 'NextMonth', value: 'अगला महीना', comment: 'the label for the button that moves calendar to next/prev' },
    No: { id: 'No', value: 'नहीं', comment: 'On a dialog button' },
    NoData: { id: 'NoData', value: 'कोई डेटा उपलब्ध नहीं', comment: 'Shown when there is no rows shown in a list' },
    NoDataFilter: { id: 'NoDataFilter', value: 'कोई डेटा उपलब्ध नहीं, अधिक परिणाम देखने के लिए नया फ़िल्टर बनायें|', comment: 'Shown when there is no rows shown in a list' },
    NoDataList: { id: 'NoDataList', value: 'कोई डेटा उपलब्ध नहीं, अधिक परिणाम देखने के लिए ऊपर के सूचि में चयन करें|', comment: 'Shown when there is no rows shown in a list' },
    None: { id: 'None', value: 'कोई नहीं', comment: 'None to pick clear color' },
    NoResults: { id: 'NoResults', value: 'परिणाम नहीं', comment: 'Search Results Text' },
    Normal: { id: 'Normal', value: 'सामान्य', comment: 'Normal row height' },
    Notes: { id: 'Notes', value: 'नोट्स', comment: 'Notes icon tooltip' },
    NotSelected: { id: 'NotSelected', value: 'चयनित नहीं किया गया', comment: 'Not Selected in icons for filtering' },
    NumberList: { id: 'NumberList', value: 'संख्या सूची', comment: 'Number List tooltip' },
    Ok: { id: 'Ok', value: 'ठीक', comment: 'Ok button on a dialog' },
    OpenBackClose: { id: 'OpenBackClose', value: 'खोलें / वापस / बंद करें', comment: 'Open / Back / Close tooltip' },
    OpenClose: { id: 'OpenClose', value: 'खोलें / बंद करें', comment: 'Open / Close tooltip' },
    OperatingSystem: { id: 'OperatingSystem', value: 'ऑपरेटिंग सिस्टम', comment: 'Device Operating System' },
    OrderedList: { id: 'OrderedList', value: 'सम्मिलित करें/निकालें संख्यांकित सूची', comment: 'Insert an Ordered list in the editor' },
    Page: { id: 'Page', value: 'पृष्ठ ', comment: 'Text on the pager links' },
    PageOf: { id: 'PageOf', value: ' पृष्ठ {1} का {0}', comment: 'Pager Text Showing current and number of pages' },
    PageOn: { id: 'PageOn', value: 'आप वर्तमान में पृष्ठ पर हैं ', comment: 'Text on the pager links' },
    PaidTimeOff: { id: 'PaidTimeOff', value: 'भुगतान किया टाइम ऑफ़', comment: 'As in vacation from work' },
    Paste: { id: 'Paste', value: 'चिपकाएँ', comment: 'Paste icon tooltip' },
    PasswordValidation: { id: 'PasswordValidation', value: '<strong>पासवर्ड</strong> <br>कम से कम 10 वर्ण का होना चाहिए<br>कम से कम एक अपरकेस वर्ण<br>कम से कम एक लोअर केस वर्ण<br>एक विशेष वर्ण शामिल<br>शामिलआपका उपयोगकर्ता नाम शामिल नहीं<br>पहले से उपयोग किया पासवर्ड नहीं हो सकता<br>', comment: 'Password validation requirements' },
    PasswordConfirmValidation: { id: 'PasswordConfirmValidation', value: 'पासवर्ड मिलान होना चाहिए', comment: 'Password Confirm validation' },
    Peak: { id: 'Peak', value: 'शिखर', comment: 'the max or peak value in a chart' },
    Pending: { id: 'Pending', value: 'लंबित', comment: 'An event or task is pending' },
    PersonalizeColumns: { id: 'PersonalizeColumns', value: 'स्तंभ वैयक्तिकरण करें', comment: 'Customize Columns in a Grid' },
    Plan: { id: 'Plan', value: 'योजना', comment: 'As in type of vacation plan' },
    Platform: { id: 'Platform', value: 'प्लेटफ़ॉर्म', comment: 'The users operating system i.e. mac, windows' },
    Period: { id: 'Period', value: 'अवधि', comment: 'the am/pm portion of a time' },
    PressDown: { id: 'PressDown', value: 'एक दिनांक चयन करने को नीचे दबाएँ', comment: 'the audible label for Tooltip about how to operate the date picker' },
    PressShiftF10: { id: 'PressShiftF10', value: 'संदर्भ मेनू खोलने के लिए Shift+F10 दबाएँ', comment: 'the audible infor for screen readers on how to use a field with a popup menu' },
    Previous: { id: 'Previous', value: 'पिछला', comment: 'Previous icon tooltip - moved to previous record' },
    PreviousMonth: { id: 'PreviousMonth', value: 'पिछला महीना', comment: 'the label for the button that moves calendar to next/prev' },
    PreviousPage: { id: 'PreviousPage', value: 'पिछला पृष्ठ', comment: 'Previous Page tooltip' },
    Print: { id: 'Print', value: 'मुद्रित करें', comment: 'Print tooltip' },
    Range: { id: 'Range', value: 'सीमा', comment: 'Range for tooltip' },
    RecordsPerPage: { id: 'RecordsPerPage', value: '{0} रिकॉर्ड प्रति पृष्ठ', comment: 'Dropdown allows the user to select how many visible records {} shows select value.' },
    Redo: { id: 'Redo', value: 'पुन: करें', comment: 'Redo tooltip' },
    ReorderRows: { id: 'ReorderRows', value: 'पंक्तियाँ पुनःआर्डर करें', comment: 'Drag and Reorder Grid Rows' },
    Refresh: { id: 'Refresh', value: 'रिफ़्रेश करें', comment: 'Refresh tooltip' },
    RequestTimeOff: { id: 'RequestTimeOff', value: 'टाइम ऑफ़ अनुरोध करें', comment: 'Making a request for time off work.' },
    Required: { id: 'Required', value: 'आवश्यक', comment: 'indicates a form field is manditory' },
    Reset: { id: 'Reset', value: 'रीसेट करें', comment: 'Reset tooltip' },
    ResetDefault: { id: 'ResetDefault', value: 'डिफ़ॉल्ट को रीसेट करें', comment: 'Reset Datagrid Columns, Filter and other Layout' },
    Result: { id: 'Result', value: 'परिणाम', comment: 'Showing a single result in a List' },
    Results: { id: 'Results', value: 'परिणाम', comment: 'As in showing N Results (plural) in a List' },
    RightAlign: { id: 'RightAlign', value: 'दाईं में संरेखित करें', comment: 'Right Align tooltip' },
    RightAlignText: { id: 'RightAlignText', value: 'दाईं में संरेखित करें', comment: 'Right Align Text tooltip' },
    Right: { id: 'Right', value: 'दाहिना', comment: 'Right' },
    Roles: { id: 'Roles', value: 'भूमिकाएँ', comment: 'Roles tooltip' },
    RowHeight: { id: 'RowHeight', value: 'पंक्ति की ऊँचाई', comment: 'Describes the Height for Rows in a Data Grid' },
    Ruby: { id: 'Ruby', value: 'रूबी', comment: 'Color in our color pallette' },
    RunFilter: { id: 'RunFilter', value: 'फ़िल्टर चलाएँ', comment: 'Execute the current filter criteria' },
    SameWindow: { id: 'SameWindow', value: 'वही विंडो', comment: 'Contents open in the same browser window.' },
    Save: { id: 'Save', value: 'सेव', comment: 'Save tooltip' },
    SaveCurrentView: { id: 'SaveCurrentView', value: 'वर्तमान दृश्य सेव करें', comment: 'Datagrids contain view sets. This menu option saves them' },
    SavedViews: { id: 'SavedViews', value: 'सेव किए गए दृश्य', comment: 'Label for a list of Views' },
    Schedule: { id: 'Schedule', value: 'शेड्यूल', comment: 'Shows a schedule view' },
    Seconds: { id: 'Seconds', value: 'सेकेंड्स', comment: 'the seconds portion of a time' },
    Search: { id: 'Search', value: 'खोजें', comment: 'Search tooltip' },
    SearchColumnName: { id: 'SearchColumnName', value: 'एक स्तंभ नाम के लिए खोजें', comment: 'Search for a datagrid column by name' },
    SearchFolder: { id: 'SearchFolder', value: 'फ़ोल्डर में खोजें', comment: 'Search Folder tooltip' },
    SearchList: { id: 'SearchList', value: 'खोज सूची', comment: 'Search List tooltip' },
    Select: { id: 'Select', value: 'चयन करें', comment: 'text describing a select action' },
    SelectDay: { id: 'SelectDay', value: 'दिन चयन करें', comment: 'Select a day in the calendar picker' },
    Selected: { id: 'Selected', value: 'चयनित', comment: 'text describing a selected object' },
    SelectAll: { id: 'SelectAll', value: 'सभी चयन करें', comment: 'describes the action of selecting all items available in a list' },
    Send: { id: 'Send', value: 'भेजें', comment: 'Send tooltip' },
    SetTime: { id: 'SetTime', value: 'समय सेट करें', comment: 'button text that inserts time when clicked' },
    Settings: { id: 'Settings', value: 'सेटिंग्स', comment: 'Settings tooltip' },
    Short: { id: 'Short', value: 'संक्षिप्त', comment: 'Describes a Shorted Row Height in a grid/list' },
    ShowFilterRow: { id: 'ShowFilterRow', value: 'फ़िल्टर पंक्ति दिखाएँ', comment: 'Toggle a row with filer info above a list' },
    ShowLess: { id: 'ShowLess', value: 'अगला दिखाएँ', comment: 'Show less form content' },
    ShowMore: { id: 'ShowMore', value: 'अधिक दिखाएँ', comment: 'Show more form content' },
    SickTime: { id: 'SickTime', value: 'बीमार समय', comment: 'Time off sick from work' },
    Slate: { id: 'Slate', value: 'स्लेट', comment: 'Color in our color pallette' },
    SlideOf: { id: 'SlideOf', value: '{1} में से {0} स्लाइड', comment: 'Slide Text Showing current and total number of slides' },
    SlidesOf: { id: 'SlidesOf', value: ' {2} में से {0} और {1} स्लाइड', comment: 'Slides Text Showing current slides and total number of slides' },
    SliderHandle: { id: 'SliderHandle', value: 'के लिए हैंडल', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control' },
    SliderMaximumHandle: { id: 'SliderMaximumHandle', value: 'के लिए अधिकतम श्रेणी हैंडल', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control' },
    SliderMinimumHandle: { id: 'SliderMinimumHandle', value: 'के लिए न्यूनतम श्रेणी हैंडल', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control' },
    SkipToMain: { id: 'SkipToMain', value: 'मुख्य अंतर्निहित वस्तु पर जाएं', comment: 'Skip link in header, jumps when clicked on to main area' },
    Status: { id: 'Status', value: 'स्थिति', comment: 'Status of someting thats submitted fx in progress, approved' },
    StartsWith: { id: 'StartsWith', value: 'के साथ प्रारंभ होता हैं', comment: 'for condition filtering' },
    StepsCompleted: { id: 'StepsCompleted', value: '{1} में से {0} चरण पूर्ण', comment: 'steps of a wizard/chart' },
    StrikeThrough: { id: 'StrikeThrough', value: 'के माध्यम से स्ट्राइक करें', comment: 'turn on and off strike through text in text editor (like word)' },
    SortAtoZ: { id: 'SortAtoZ', value: 'आरोही क्रम में सॉर्ट करें', comment: 'Sort A to Z in icons for filtering' },
    SortZtoA: { id: 'SortZtoA', value: 'अवरोही क्रम में सॉर्ट करें', comment: 'Sort Z to A in icons for filtering' },
    SortDown: { id: 'SortDown', value: 'नीचे सॉर्ट करें', comment: 'Sort Down tooltip' },
    SortUp: { id: 'SortUp', value: 'उपर सॉर्ट करें', comment: 'Sort Up tooltip' },
    Subscript: { id: 'Subscript', value: 'सबस्क्रिप्ट', comment: 'Turn on and off Subscript text in text editor (like word)' },
    Superscript: { id: 'Superscript', value: 'सुपरस्क्रिप्ट', comment: 'Turn on and off Superscript text in text editor (like word)' },
    Tabs: { id: 'Tabs', value: 'टैब...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu' },
    Tack: { id: 'Tack', value: 'पिन करें', comment: 'Pin an object' },
    Tall: { id: 'Tall', value: 'लंबा', comment: 'Describes a Taller Row Height in a grid/list' },
    Target: { id: 'Target', value: 'लक्ष्य', comment: 'Label for an input to enter a Target (Url Attribute)' },
    TeamEvent: { id: 'TeamEvent', value: 'समूह इवेंट', comment: 'Having an event with a work team' },
    TestLocaleDefaults: { id: 'TestLocaleDefaults', value: 'लोकेल डिफ़ॉल्ट का उपयोग करें', comment: 'Do not translate' },
    TextColor: { id: 'TextColor', value: 'टेक्स्ट रंग', comment: 'add or edit text color in the editor' },
    TextDropArea: { id: 'DropArea', value: 'फाइल अपलोड करने के लिए ड्रैग और ड्राप करें', comment: 'text for drop area for advanced fileupload' },
    TextDropAreaWithBrowse: { id: 'TextDropAreaWithBrowse', value: 'अपलोड करने के लिए ड्रैग और ड्राप या <span class="hyperlink">Select Files</span>', comment: 'text for drop area with browse for advanced fileupload' },
    TextBtnCancel: { id: 'TextBtnCancel', value: 'फ़ाइल अपलोड करना रद्द करें', comment: 'text for cancel button for advanced fileupload' },
    TextBtnCloseError: { id: 'TextBtnCloseError', value: 'यह त्रुटि बंद करें', comment: 'text for error close button for advanced fileupload' },
    TextBtnRemove: { id: 'TextBtnRemove', value: 'यह त्रुटि बंद करें', comment: 'text for remove button for advanced fileupload' },
    Timer: { id: 'Timer', value: 'समय', comment: 'Timer tooltip' },
    To: { id: 'To', value: 'तक', comment: 'End of a range (of dates)' },
    Today: { id: 'Today', value: 'आज', comment: 'refering to today on a calendar' },
    ToggleBold: { id: 'ToggleBold', value: 'बोल्ड टेक्स्ट टॉगल करें', comment: 'turn on and off bold in text editor (like word)' },
    ToggleH3: { id: 'ToggleH3', value: 'शीर्षक 3 टॉगल करें', comment: 'turn on and off heading 3 text' },
    ToggleH4: { id: 'ToggleH4', value: 'शीर्षक 4 टॉगल करें', comment: 'turn on and off heading 4 text' },
    ToggleItalic: { id: 'ToggleItalic', value: 'तिरछा पाठ टॉगल करें', comment: 'turn on and off Italic in text editor (like word)' },
    ToggleUnderline: { id: 'ToggleUnderline', value: 'रेखांकित पाठ टॉगल करें', comment: 'turn on and off Underline in text editor (like word)' },
    Toolbar: { id: 'Toolbar', value: 'उपकरण पट्टी', comment: 'describing the toolbar component' },
    TopAlign: { id: 'TopAlign', value: 'शीर्ष संरेखित', comment: 'Top Align tooltip' },
    Total: { id: 'Total', value: 'कुल', comment: 'Mathematic total of a calculation' },
    Totals: { id: 'Totals', value: 'कुल', comment: 'Mathematic total of a calculation (plural)' },
    TreeCollapse: { id: 'TreeCollapse', value: 'ट्री संक्षिप्त करें', comment: 'Tree Collapse tooltip' },
    TreeExpand: { id: 'TreeExpand', value: 'ट्री विस्तृत करें', comment: 'Tree Expand tooltip' },
    Turquoise: { id: 'Turquoise', value: 'फ़िरोज़ी', comment: 'Color in our color pallette' },
    Up: { id: 'Up', value: 'उपर', comment: 'Up tooltip' },
    UpComingEvents: { id: 'UpComingEvent', value: 'आगामी ईवेंट्स', comment: 'List of upcoming calendar events' },
    UpComingTimeOff: { id: 'UpComingTimeOff', value: 'आगामी टाइम ऑफ़', comment: 'As in time off work' },
    Upload: { id: 'Upload', value: 'अपलोड करें', comment: 'Upload tooltip' },
    UnavailableDate: { id: 'UnavailableDate', value: 'अनुपलब्ध दिनांक', comment: 'Unavailable Date Text' },
    Underline: { id: 'Underline', value: 'रेखांकित करें', comment: 'Make text Underlined' },
    Undo: { id: 'Undo', value: 'पूर्ववत् करें', comment: 'Undo tooltip' },
    Unlocked: { id: 'Unlocked', value: 'अनलॉक्ड', comment: 'Unlocked tooltip' },
    UnorderedList: { id: 'UnorderedList', value: 'सम्मिलित करें/निकालें बुलेट सूची', comment: 'Insert an Unordered list in the editor' },
    Unsupported: { id: 'Unsupported', value: 'यह विषयवस्तु उपलब्ध नहीं हैं क्योंकि यह आपके ब्राउज़र संस्करण में समर्थन नहीं करने वाले सुविधाओं का उपयोग करता हैं।', comment: 'Suggesting browser upgrade for missing features.' },
    Url: { id: 'Url', value: 'Url', comment: 'Url tooltip' },
    UseArrow: { id: 'UseArrow', value: '. चयन करने के लिए एरो कीस का उपयोग करें', comment: 'Instructional comments for screen readers' },
    UseEnter: { id: 'UseEnter', value: '. लुकअप एंटर या डाउन एरो', comment: 'Instructional comments for screen readers' },
    User: { id: 'User', value: 'उपयोगकर्ता', comment: 'User tooltip' },
    UserProfile: { id: 'UserProfile', value: 'उपयोगकर्ता प्रोफ़ाइल', comment: 'User Profile tooltip' },
    Version: { id: 'Version', value: 'IDS संस्करण', comment: 'Version of IDS' },
    VerticalMiddleAlign: { id: 'VerticalMiddleAlign', value: 'अनुलंब संरेखित मध्य', comment: 'Vertical Align tooltip' },
    ViewSource: { id: 'ViewSource', value: 'स्रोत देखें', comment: 'Toggle the source view in the editor' },
    ViewVisual: { id: 'ViewVisual', value: 'विज़ुअल देखें', comment: 'Toggle the visual view in the editor' },
    Week: { id: 'Week', value: 'सप्ताह', comment: 'Shows a view of the current weeks events' },
    Year: { id: 'Year', value: 'वर्ष', comment: 'As in a date year' },
    Yes: { id: 'Yes', value: 'हाँ', comment: 'On a dialog button' }
  }
});
