/* eslint-disable no-bitwise, no-undef */

// Get Latest from http://www.unicode.org/Public/cldr/25/
Soho.Locale.addCulture('lv-LV', {
  // layout/language
  language: 'lv',
  englishName: 'Latvian (Latvia)',
  nativeName: 'latviešu (Latvija)',
  // layout/orientation/@characters
  direction: 'left-to-right',
  // ca-gregorian
  calendars: [{
    name: 'gregorian',
    // ca-gregorian/main/dates/calendars/gregorian/dateFormats/
    dateFormat: {
      separator: '.', // Infered
      timeSeparator: ':',
      short: 'dd.MM.yyyy', // use four digit year
      medium: 'y. gada d. MMM',
      long: 'y. gada d. MMMM',
      full: 'EEEE, y. gada d. MMMM',
      month: 'd. MMMM',
      year: 'yyyy. g MMMM',
      timestamp: 'HH:mm:ss',
      datetime: 'dd.MM.yyyy HH:mm',
      timezone: 'dd.MM.yyyy HH:mm zz',
      timezoneLong: 'dd.MM.yyyy HH:mm zzzz'
    }, // Infered short + short gregorian/dateTimeFormats
    // ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
    days: {
      wide: ['svētdiena', 'pirmdiena', 'otrdiena', 'trešdiena', 'ceturtdiena', 'piektdiena', 'sestdiena'],
      abbreviated: ['Sv', 'Pr', 'Ot', 'Tr', 'Ce', 'Pk', 'Se'],
      narrow: ['S', 'P', 'O', 'T', 'C', 'P', 'S']
    },
    // ca-gregorian/main/dates/calendars/gregorian/months/format/wide
    months: {
      wide: ['Janvāris', 'Februāris', 'Marts', 'Aprīlis', 'Maijs', 'Jūnijs', 'Jūlijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decembris'],
      abbreviated: ['Janv.', 'Febr.', 'Marts', 'Apr.', 'Maijs', 'Jūn.', 'Jūl.', 'Aug.', 'Sept.', 'Okt.', 'Nov.', 'Dec.']
    },
    // ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
    timeFormat: 'HH:mm',
    // ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
    dayPeriods: ['priekšpusdienā', 'pēcpusdienā']
  }],
  // numbers/currencyFormats-numberSystem-latn/standard
  currencySign: 'Ls',
  currencyFormat: '¤#,##0.00',
  // numbers/symbols-numberSystem-latn
  numbers: {
    percentSign: '%',
    percentFormat: '#,##0 %',
    minusSign: '-',
    decimal: ',',
    group: ' '
  },
  // Resx - Provided By Translation Team
  messages: {
    AboutText: { id: 'AboutText', value: 'Autortiesības &copy; {0} Infor. Visas tiesības paturētas. Šeit norādītie vārdi un dizaina apzīmējumi ir Infor un/vai tā saistīto uzņēmumu un filiāļu preču zīmes un/vai reģistrētas preču zīmes. Visas tiesības paturētas. Visas citas šeit norādītās preču zīmes pieder to attiecīgajiem īpašniekiem.' },
    Actions: { id: 'Actions', value: 'Darbības', comment: 'Tooltip text for the action button with additional in context actions' },
    AdditionalItems: { id: 'AdditionalItems', value: 'Papildu vienumi', comment: 'Button tooltip used in a list of movable items' },
    Add: { id: 'Add', value: 'Pievienot', comment: 'Add' },
    AddComments: { id: 'AddComments', value: 'Pievienot komentārus', comment: 'Add comments to a form of data' },
    AddNewTab: { id: 'AddNewTab', value: 'Pievienot jaunu cilni', comment: 'Attached to a button that adds new tabs' },
    AdministrativeLeave: { id: 'AdministrativeLeave', value: 'Administratīvā iziešana', comment: 'As in vacation time from work' },
    AdvancedFilter: { id: 'AdvancedFilter', value: 'Izveidot detalizētu filtrēšanu', comment: 'In a data grid active an advanced filtering feature' },
    Alert: { id: 'Alert', value: 'Brīdinājums', comment: 'Alert' },
    AlertOnPage: { id: 'AlertOnPage', value: 'Brīdinājuma ziņojums(-i) lapā', comment: 'Alert message(s) on page n' },
    All: { id: 'All', value: 'Visi', comment: 'All items in the context of a filter' },
    AllResults: { id: 'AllResults', value: 'Visi rezultāti', comment: 'Search Results Text' },
    AligntoBottom: { id: 'AligntoBottom', value: 'Līdzināt pie apakšmalas', comment: 'Align to Bottom tooltip' },
    AlignCenterHorizontally: { id: 'AlignCenterHorizontally', value: 'Horizontāli līdzināt pie centra', comment: 'Align Center Horizontally tooltip' },
    Amber: { id: 'Amber', value: 'Dzintara dzeltena', comment: 'Color in our color pallette' },
    Amethyst: { id: 'Amethyst', value: 'Ametista', comment: 'Color in our color pallette' },
    Apply: { id: 'Apply', value: 'Lietot', comment: 'Text in a button to apply an action' },
    AppMenuTriggerText: { id: 'AppMenuTriggerText', value: 'Izvēlne', comment: 'Text in a special Module Tab used to trigger an Application Menu open or closed' },
    Attach: { id: 'Attach', value: 'Pievienot', comment: 'Attach' },
    Available: { id: 'Available', value: 'Pieejams', comment: 'Button tooltip used in a list of movable items' },
    Azure: { id: 'Azure', value: 'Gaiši debeszila', comment: 'Color in our color pallette' },
    BackgroundColor: { id: 'BackgroundColor', value: 'Fona krāsa', comment: 'add or edit text background color in the editor' },
    Between: { id: 'Between', value: 'Starp', comment: 'Between in icons for filtering' },
    Blockquote: { id: 'Blockquote', value: 'Citāta bloks', comment: 'insert a block quote in the editor' },
    Bold: { id: 'Bold', value: 'Treknraksts', comment: 'Make text Bold' },
    Bookmarked: { id: 'Bookmarked', value: 'Pievienots grāmatzīmēm', comment: 'Bookmark filled - Element is already bookmarked' },
    BookmarkThis: { id: 'BookmarkThis', value: 'Pievienot šo grāmatzīmēm', comment: 'Bookmark an element' },
    Breadcrumb: { id: 'Breadcrumb', value: 'Atpakaļceļš', comment: 'Text describing the Breadcrumb' },
    Browser: { id: 'Browser', value: 'Tīmekļa pārlūkprogramma', comment: 'As in a Web Browser' },
    BulletedList: { id: 'BulletedList', value: 'Aizzīmju saraksts', comment: 'Bulleted List tooltip' },
    Calendar: { id: 'Calendar', value: 'Kalendārs', comment: 'Inline Text for the title of the Calendar control' },
    Camera: { id: 'Camera', value: 'Kamera', comment: 'Camera tooltip' },
    Cancel: { id: 'Cancel', value: 'Atcelt', comment: 'Cancel tooltip' },
    CapsLockOn: { id: 'CapsLockOn', value: 'Ieslēgt burtslēgu', comment: 'Caps Lock On message' },
    Cart: { id: 'Cart', value: 'Grozs', comment: 'Cart tooltip' },
    CenterText: { id: 'CenterText', value: 'Centrs', comment: 'An Icon Tooltip' },
    CharactersLeft: { id: 'CharactersLeft', value: 'Atlikušas rakstzīmes {0}', comment: 'indicator showing how many more characters you can type.' },
    CharactersMax: { id: 'CharactersMax', value: 'Maksimālais rakstzīmju skaits no ', comment: 'indicator showing how many max characters you can type.' },
    ChangeSelection: { id: 'ChangeSelection', value: '. Izmantojiet bulttaustiņus, lai mainītu atlasi.', comment: 'Audible Text for drop down list help' },
    ChangeView: { id: 'ChangeView', value: 'Mainīt skatu', comment: 'Change the current page from a list of options' },
    Checkbox: { id: 'Checkbox', value: 'Izvēles rūtiņa', comment: 'Checkbox tooltip' },
    Checked: { id: 'Checked', value: 'Atzīmēta', comment: 'Checked tooltip' },
    Clear: { id: 'Clear', value: 'Notīrīt', comment: 'Tooltip for a Clear Action' },
    ClearFilter: { id: 'ClearFilter', value: 'Notīrīt filtru', comment: 'Clear the current filter criteria' },
    ClearFormatting: { id: 'ClearFormatting', value: 'Notīrīt formatējumu', comment: 'Clear the formatting in editor' },
    ClearSelection: { id: 'ClearSelection', value: '(Notīrīt atlasi)', comment: 'clear dropdown selection' },
    Clock: { id: 'Clock', value: 'Pulkstenis', comment: 'Clock tooltip' },
    Close: { id: 'Close', value: 'Aizvērt', comment: 'Tooltip for a Close Button Action' },
    Clickable: { id: 'Clickable', value: 'Klikšķināms redaktorā', comment: 'Clickable in editor' },
    Copy: { id: 'Copy', value: 'Kopēt', comment: 'Copy tooltip' },
    Collapse: { id: 'Collapse', value: 'Sakļaut', comment: 'Collapse / close a tree/submenu' },
    CollapseAppTray: { id: 'CollapseAppTray', value: 'Sakļaut lietotņu ikonjoslu', comment: 'Collapse App Tray tooltip' },
    Columns: { id: 'Columns', value: 'Kolonnas', comment: 'Columns tooltip' },
    Comments: { id: 'Comments', value: 'Komentāri', comment: 'Comments on an form' },
    CompanyHoliday: { id: 'CompanyHoliday', value: 'Uzņēmuma brīvdiena', comment: 'A holiday provided by work.' },
    Component: { id: 'Component', value: 'Komponents', comment: 'As in a UI component - building block.' },
    Compose: { id: 'Compose', value: 'Veidot', comment: 'Compose tooltip' },
    Completed: { id: 'Completed', value: 'Pabeigts', comment: 'Text For a Completed Status' },
    Confirm: { id: 'Confirm', value: 'Apstiprināt', comment: 'Confirm tooltip' },
    ConfirmOnPage: { id: 'ConfirmOnPage', value: 'Apstiprināt ziņojumu(-us) lapā', comment: 'Confirm message(s) on page n' },
    CookiesEnabled: { id: 'CookiesEnabled', value: 'Sīkfaili iespējoti', comment: 'Returns if browser cookies are enabled or not.' },
    Contains: { id: 'Contains', value: 'Satur', comment: 'Contains in icons for filtering' },
    CssClass: { id: 'CssClass', value: 'CSS klase', comment: 'Label for entering a Css Class name' },
    Cut: { id: 'Cut', value: 'Izgriezt', comment: 'Cut tooltip' },
    Date: { id: 'Date', value: 'Datums', comment: 'Describes filtering by a date data type' },
    Day: { id: 'Day', value: 'Diena', comment: 'Shows view with day events' },
    Days: { id: 'Days', value: 'Dienas ', comment: 'Show how many days until an event' },
    DaysOverdue: { id: 'DaysOverdue', value: 'Nokavētas {0} dienas', comment: 'For a task /date UI' },
    DaysRemaining: { id: 'DaysRemaining', value: 'Atlikušas {0} dienas', comment: 'For a task /date UI' },
    Delete: { id: 'Delete', value: 'Dzēst', comment: 'Delete Toolbar Action Tooltip' },
    DeviceName: { id: 'Device', value: 'Ierīce', comment: 'Name of the Device' },
    DistributeHoriz: { id: 'DistributeHoriz', value: 'Izkliedēt horizontāli', comment: 'Icon button tooltip for action that distributes elements across Horizontally' },
    Document: { id: 'Document', value: 'Dokuments', comment: 'Document tooltip' },
    DiscretionaryTimeOff: { id: 'DiscretionaryTimeOff', value: 'Papildu brīvais laiks', comment: 'As in work time off' },
    Dirty: { id: 'Dirty', value: 'Rinda ir mainījusies', comment: 'Record is dirty / modified' },
    Drilldown: { id: 'Drilldown', value: 'Rādīt detalizēti', comment: 'Drill by moving page flow into a record' },
    Drillup: { id: 'Drillup', value: 'Rādīt vispārīgi', comment: 'Opposite of Drilldown, move back up to a larger set of records' },
    Dropdown: { id: 'Dropdown', value: 'Nolaižams', comment: 'Dropdown' },
    DoesNotContain: { id: 'DoesNotContain', value: 'Neietver', comment: 'Does Not Contain in icons for filtering' },
    DoesNotEndWith: { id: 'DoesNotEndWith', value: 'Nebeidzas ar', comment: 'For condition filtering' },
    DoesNotEqual: { id: 'DoesNotEqual', value: 'Nav vienāds', comment: 'Does Not Equal in icons for filtering' },
    DoesNotStartWith: { id: 'DoesNotStartWith', value: 'Nesākas ar', comment: 'For condition filtering' },
    Down: { id: 'Down', value: 'Uz leju', comment: 'Down tooltip' },
    Download: { id: 'Download', value: 'Lejupielādēt', comment: 'Download tooltip' },
    Duplicate: { id: 'Duplicate', value: 'Dublēt', comment: 'Duplicate tooltip' },
    EitherSelectedOrNotSelected: { id: 'EitherSelectedOrNotSelected', value: 'Atlasīts vai nav atlasīts', comment: 'Either Selected Or NotSelected in icons for filtering' },
    EndsWith: { id: 'EndsWith', value: 'Beidzas ar', comment: 'for condition filtering' },
    EnterComments: { id: 'EnterComments', value: 'Ievadiet komentārus šeit...', comment: 'Placeholder text for a text input (comments)' },
    Error: { id: 'Error', value: 'Kļūda', comment: 'Title, Spoken Text describing fact an error has occured' },
    ErrorAllowedTypes: { id: 'ErrorAllowedTypes', value: 'Faila tips nav atļauts', comment: 'Error string for file-upload' },
    ErrorMaxFileSize: { id: 'ErrorMaxFileSize', value: 'Pārsniegts faila lieluma ierobežojums', comment: 'Error string for file-upload' },
    ErrorMaxFilesInProcess: { id: 'ErrorMaxFilesInProcess', value: 'Pārsniegts maksimālais atļauto failu ierobežojums', comment: 'Error string for file-upload' },
    ErrorOnPage: { id: 'ErrorOnPage', value: 'Kļūdas ziņojums(-i) lapā', comment: 'Error message(s) on page n' },
    EmailValidation: { id: 'EmailValidation', value: 'E-pasta adrese nav derīga', comment: 'This the rule for email validation' },
    Emerald: { id: 'Emerald', value: 'Smaragdzaļa', comment: 'Color in our color pallette' },
    Expand: { id: 'Expand', value: 'Izvērst', comment: 'Expand open a tree/submenu' },
    ExpandAppTray: { id: 'ExpandAppTray', value: 'Izvērst lietotņu ikonjoslu', comment: 'ExpandAppTray tooltip' },
    ExpandCollapse: { id: 'ExpandCollapse', value: 'Izvērst/sakļaut', comment: 'Text to toggle a button in a container.' },
    ExportAsSpreadsheet: { id: 'ExportAsSpreadsheet', value: 'Eksportēt uz izklājlapu', comment: 'Export as Spreadsheet tooltip' },
    Edit: { id: 'Edit', value: 'Rediģēt', comment: 'Edit tooltip' },
    Equals: { id: 'Equals', value: 'Vienāds', comment: 'Equals in icons for filtering' },
    Event: { id: 'Event', value: 'Notikums', comment: 'As in an event that would be in a calendar' },
    ExitFullView: { id: 'ExitFullView', value: 'Iziet no pilna skata režīma', comment: 'Exit Full View tooltip' },
    Export: { id: 'Export', value: 'Eksportēt', comment: 'Export tooltip' },
    ExportToExcel: { id: 'ExportToExcel', value: 'Eksportēt uz Excel', comment: 'Export To Excel menu option in datagrid' },
    Favorite: { id: 'Favorite', value: 'Izlase', comment: 'A favorite item' },
    FileUpload: { id: 'FileUpload', value: 'Faila augšupielāde. Nospiediet taustiņu Ievadīt, lai pārlūkotu failu', comment: 'Screen Reader instructions' },
    FieldFilter: { id: 'FieldFilter', value: 'Lauka filtrs', comment: 'Used for Field Filter' },
    Filter: { id: 'Filter', value: 'Filtrēt', comment: 'Filter tooltip' },
    FirstPage: { id: 'FirstPage', value: 'Pirmā lapa', comment: 'First Page tooltip' },
    Folder: { id: 'Folder', value: 'Mape', comment: 'Folder tooltip' },
    From: { id: 'From', value: 'No', comment: 'Start of a range (of dates)' },
    FullView: { id: 'FullView', value: 'Pilns skats', comment: 'Full View tooltip' },
    GoForward: { id: 'GoForward', value: 'Uz priekšu', comment: 'Move Page / object this direction' },
    GoBack: { id: 'GoBack', value: 'Atgriezties', comment: 'Move Page / object this directionp' },
    GoDown: { id: 'GoDown', value: 'Uz leju', comment: 'Move Page / object this directionp' },
    GoUp: { id: 'GoUp', value: 'Uz augšu', comment: 'Move Page / object this direction' },
    Go: { id: 'Go', value: 'Aiziet!', comment: 'Go, perform a movement, start a search, move to the next "thing" in a workflow.' },
    Graphite: { id: 'Graphite', value: 'Grafīts', comment: 'Color in our color pallette' },
    GreaterOrEquals: { id: 'GreaterOrEquals', value: 'Lielāks nekā vai vienāds ar', comment: 'Greater Than Or Equals in icons for filtering' },
    GreaterThan: { id: 'GreaterThan', value: 'Lielāks nekā', comment: 'Greater Than in icons for filtering' },
    Grid: { id: 'Grid', value: 'Režģis', comment: 'Grid tooltip' },
    Hour: { id: 'Hour', value: 'Stunda', comment: 'the hour portion of a time' },
    Hours: { id: 'Hours', value: 'Stundas', comment: 'the hour portion of a time (plural)' },
    HeadingThree: { id: 'HeadingThree', value: 'Trešais virsraksts', comment: 'Heading Three tooltip' },
    HeadingFour: { id: 'HeadingFour', value: 'Ceturtais virsraksts', comment: 'Heading Four tooltip' },
    Highest: { id: 'Highest', value: 'Visaugstākais', comment: 'Highest Four tooltip' },
    Home: { id: 'Home', value: 'Sākums', comment: 'Home tooltip' },
    HtmlView: { id: 'HtmlView', value: 'HTML skats', comment: 'Html View tooltip' },
    Image: { id: 'Image', value: 'Attēls', comment: 'Image of something' },
    Import: { id: 'Import', value: 'Importēt', comment: 'Import tooltip' },
    Info: { id: 'Info', value: 'Informācija', comment: 'Info tooltip' },
    InfoOnPage: { id: 'InfoOnPage', value: 'Informācijas ziņojums(-i) lapā', comment: 'Information message(s) on page n' },
    InProgress: { id: 'In Progress', value: 'Notiekošs', comment: 'Info tooltip that an action is in progress' },
    Insert: { id: 'Insert', value: 'Ievietot', comment: 'Insert Modal Dialog Button' },
    InsertAnchor: { id: 'InsertAnchor', value: 'Ievietot hipersaiti', comment: 'Insert Acnhor (link) in an editor' },
    InsertImage: { id: 'InsertImage', value: 'Ievietot attēlu', comment: 'Insert Image in an editor' },
    InsertLink: { id: 'InsertLink', value: 'Ievietot saiti', comment: 'Insert Link in an editor' },
    InsertUrl: { id: 'InsertUrl', value: 'Ievietot vietrādi URL', comment: 'Insert a Url in an editor' },
    Italic: { id: 'Italic', value: 'Slīpraksts', comment: 'Make Text Italic' },
    InvalidDate: { id: 'InvalidDate', value: 'Nederīgs datums', comment: 'validation message for wrong date format (short)' },
    InvalidTime: { id: 'InvalidTime', value: 'Nederīgs laiks', comment: 'validation message for wrong time format' },
    Inventory: { id: 'Inventory', value: 'Inventārs', comment: 'Icon button tooltop for Inventory Action' },
    InRange: { id: 'InRange', value: 'Diapazonā', comment: 'In Range in icons for filtering' },
    IsEmpty: { id: 'IsEmpty', value: 'Ir tukšs', comment: 'Is Empty in icons for filtering' },
    IsNotEmpty: { id: 'IsNotEmpty', value: 'Nav tukšs', comment: 'Is Not Empty in icons for filtering' },
    ItemsSelected: { id: 'ItemsSelected', value: 'Atlasīti vienumi', comment: 'Num of Items selected for swaplist' },
    JustifyCenter: { id: 'JustifyCenter', value: 'Centrs', comment: 'justify text to center in the editor' },
    JustifyLeft: { id: 'JustifyLeft', value: 'Līdzināt pa kreisi', comment: 'justify text to left in the editor' },
    JustifyRight: { id: 'JustifyRight', value: 'Līdzināt pa labi', comment: 'justify text to right in the editor' },
    Keyword: { id: 'Keyword', value: 'Atslēgvārds', comment: 'Describes filtering by a keyword search' },
    Launch: { id: 'Launch', value: 'Palaist', comment: 'Launch' },
    LastPage: { id: 'LastPage', value: 'Pēdējā lapa', comment: 'Last Page tooltip' },
    Left: { id: 'Left', value: 'Pa kreisi', comment: 'Left tooltip' },
    Legend: { id: 'Legend', value: 'Apzīmējumi', comment: 'As in a chart legend' },
    LessOrEquals: { id: 'LessOrEquals', value: 'Mazāks nekā vai vienāds ar', comment: 'Less Than Or Equals in icons for filtering' },
    LessThan: { id: 'LessThan', value: 'Mazāks nekā', comment: 'Less Than in icons for filtering' },
    Link: { id: 'Link', value: 'Saite', comment: 'Link - as in hyperlink - icon tooltop' },
    Load: { id: 'Load', value: 'Ielādēt', comment: 'Load icon tooltip' },
    Loading: { id: 'Loading', value: 'Ielādēšana', comment: 'Text below spinning indicator to indicate loading' },
    Locale: { id: 'Locale', value: 'Lokalizācija', comment: 'The users locale string for example en-US, it-It' },
    Locked: { id: 'Locked', value: 'Bloķēts', comment: 'Locked tooltip' },
    Logout: { id: 'Logout', value: 'Atteikties', comment: 'Log out of the application' },
    Lookup: { id: 'Lookup', value: 'Uzmeklēšana', comment: 'Lookup - As in looking up a record or value' },
    Lowest: { id: 'Lowest', value: 'Viszemākais', comment: 'Lowest - As in Lowest value' },
    Mail: { id: 'Mail', value: 'Pasts', comment: 'Mail tooltip' },
    MapPin: { id: 'MapPin', value: 'Piespraust', comment: 'Map Pin tooltip' },
    Maximize: { id: 'Maximize', value: 'Maksimizēt', comment: 'Maximize a screen or dialog in the UI' },
    Median: { id: 'Median', value: 'Mediāna', comment: 'Median in Mathematics' },
    Medium: { id: 'Medium', value: 'Vidējs', comment: 'Describes a Medium sized Row Height in a grid/list' },
    Menu: { id: 'Menu', value: 'Izvēlne', comment: 'Menu tooltip' },
    MingleShare: { id: 'MingleShare', value: 'Koplietot ar Ming.le', comment: 'Share the contextual object/action in the mingle system' },
    Minutes: { id: 'Minutes', value: 'Minūtes', comment: 'the minutes portion of a time' },
    Minimize: { id: 'Minimize', value: 'Minimizēt', comment: 'Minimize tooltip' },
    Minus: { id: 'Minus', value: 'Mīnus', comment: 'Minus tooltip' },
    Mobile: { id: 'Mobile', value: 'Mobilais', comment: 'Indicates a mobile device (phone tablet ect)' },
    Month: { id: 'Month', value: 'Mēnesis', comment: 'As in a date month' },
    More: { id: 'More', value: 'Vairāk...', comment: 'Text Indicating More Buttons or form content' },
    MoreActions: { id: 'MoreActions', value: 'Vairāk darbību', comment: 'Text on the More Actions button indictating hidden functions' },
    MoveToLeft: { id: 'MoveToLeft', value: 'Pārvietot pa kreisi', comment: 'Button tooltip used in a list of movable items' },
    MoveToRight: { id: 'MoveToRight', value: 'Pārvietot pa labi', comment: 'Button tooltip used in a list of movable items' },
    MsgDirty: { id: 'MsgDirty', value: ', Modificēts', comment: 'for modified form fields' },
    New: { id: 'New', value: 'Jauns', comment: 'Add new rowstatus in datagrid' },
    NewDocument: { id: 'NewDocument', value: 'Jauns dokuments', comment: 'New Document tooltip' },
    NewItem: { id: 'NewItem', value: 'Jauns vienums', comment: 'New item in listbuilder' },
    NewWindow: { id: 'NewWindow', value: 'Jauns logs', comment: 'Contents open in a new browser window.' },
    Next: { id: 'Next', value: 'Nākamais', comment: 'Next in icons tooltip' },
    NextPage: { id: 'NextPage', value: 'Nākamā lapa', comment: 'Next on Pager' },
    NextMonth: { id: 'NextMonth', value: 'Nākamais mēnesis', comment: 'the label for the button that moves calendar to next/prev' },
    No: { id: 'No', value: 'Nē', comment: 'On a dialog button' },
    NoData: { id: 'NoData', value: 'Dati nav pieejami', comment: 'Shown when there is no rows shown in a list' },
    NoDataFilter: { id: 'NoDataFilter', value: 'Dati nav pieejami; atlasiet jaunu filtru, lai skatītu vairāk rezultātu.', comment: 'Shown when there is no rows shown in a list' },
    NoDataList: { id: 'NoDataList', value: 'Dati nav pieejami; veiciet atlasi sarakstā iepriekš, lai skatītu vairāk rezultātu.', comment: 'Shown when there is no rows shown in a list' },
    None: { id: 'None', value: 'Nav', comment: 'None to pick clear color' },
    NoResults: { id: 'NoResults', value: 'Nav rezultātu', comment: 'Search Results Text' },
    Normal: { id: 'Normal', value: 'Parasts', comment: 'Normal row height' },
    Notes: { id: 'Notes', value: 'Piezīmes', comment: 'Notes icon tooltip' },
    NotSelected: { id: 'NotSelected', value: 'Nav atlasīts', comment: 'Not Selected in icons for filtering' },
    NumberList: { id: 'NumberList', value: 'Numurēts saraksts', comment: 'Number List tooltip' },
    Ok: { id: 'Ok', value: 'Labi', comment: 'Ok button on a dialog' },
    OpenBackClose: { id: 'OpenBackClose', value: 'Atvērt/atpakaļ/aizvērt', comment: 'Open / Back / Close tooltip' },
    OpenClose: { id: 'OpenClose', value: 'Atvērt/aizvērt', comment: 'Open / Close tooltip' },
    OperatingSystem: { id: 'OperatingSystem', value: 'Operētājsistēma', comment: 'Device Operating System' },
    OrderedList: { id: 'OrderedList', value: 'Ievietot/noņemt numurētu sarakstu', comment: 'Insert an Ordered list in the editor' },
    Page: { id: 'Page', value: 'lapa ', comment: 'Text on the pager links' },
    PageOf: { id: 'PageOf', value: '{0}. lapa no {1}', comment: 'Pager Text Showing current and number of pages' },
    PageOn: { id: 'PageOn', value: 'Pašlaik jūs esat { }. lapā ', comment: 'Text on the pager links' },
    PaidTimeOff: { id: 'PaidTimeOff', value: 'Apmaksāts brīvais laiks', comment: 'As in vacation from work' },
    Paste: { id: 'Paste', value: 'Ielīmēt', comment: 'Paste icon tooltip' },
    PasswordValidation: { id: 'PasswordValidation', value: '<strong>Parolē ir jābūt</strong><br>vismaz 10 rakstzīmēm,<br>vismaz vienam lielajam burtam,<br>vismaz vienam mazajam burtam un<br>vienai speciālajai rakstzīmei.<br>Tā nedrīkst ietvert jūsu lietotājvārdu<br>un nevar būt iepriekš lietota parole<br>', comment: 'Password validation requirements' },
    PasswordConfirmValidation: { id: 'PasswordConfirmValidation', value: 'Parolei jāsakrīt', comment: 'Password Confirm validation' },
    Peak: { id: 'Peak', value: 'Maksimālais', comment: 'the max or peak value in a chart' },
    Pending: { id: 'Pending', value: 'Gaida', comment: 'An event or task is pending' },
    PersonalizeColumns: { id: 'PersonalizeColumns', value: 'Personalizēt kolonnas', comment: 'Customize Columns in a Grid' },
    Plan: { id: 'Plan', value: 'Plāns', comment: 'As in type of vacation plan' },
    Platform: { id: 'Platform', value: 'Platforma', comment: 'The users operating system i.e. mac, windows' },
    Period: { id: 'Period', value: 'Periods', comment: 'the am/pm portion of a time' },
    PressDown: { id: 'PressDown', value: 'Nospiediet lejupvērsto bultiņu, lai atlasītu datumu', comment: 'the audible label for Tooltip about how to operate the date picker' },
    PressShiftF10: { id: 'PressShiftF10', value: 'Nospiediet Shift+F10, lai atvērtu kontekstizvēlni.', comment: 'the audible infor for screen readers on how to use a field with a popup menu' },
    Previous: { id: 'Previous', value: 'Iepriekšējais', comment: 'Previous icon tooltip - moved to previous record' },
    PreviousMonth: { id: 'PreviousMonth', value: 'Iepriekšējais mēnesis', comment: 'the label for the button that moves calendar to next/prev' },
    PreviousPage: { id: 'PreviousPage', value: 'Iepriekšējā lapa', comment: 'Previous Page tooltip' },
    Print: { id: 'Print', value: 'Drukāt', comment: 'Print tooltip' },
    Range: { id: 'Range', value: 'Diapazons', comment: 'Range for tooltip' },
    RecordsPerPage: { id: 'RecordsPerPage', value: '{0} ieraksti vienā lappusē', comment: 'Dropdown allows the user to select how many visible records {} shows select value.' },
    Redo: { id: 'Redo', value: 'Atcelt atsaukšanu', comment: 'Redo tooltip' },
    ReorderRows: { id: 'ReorderRows', value: 'Pārkārtot rindas', comment: 'Drag and Reorder Grid Rows' },
    Refresh: { id: 'Refresh', value: 'Atsvaidzināt', comment: 'Refresh tooltip' },
    RequestTimeOff: { id: 'RequestTimeOff', value: 'Pieprasītais brīvais laiks', comment: 'Making a request for time off work.' },
    Required: { id: 'Required', value: 'Nepieciešams', comment: 'indicates a form field is manditory' },
    Reset: { id: 'Reset', value: 'Atiestatīt', comment: 'Reset tooltip' },
    ResetDefault: { id: 'ResetDefault', value: 'Atiestatīt uz noklusējumu', comment: 'Reset Datagrid Columns, Filter and other Layout' },
    Result: { id: 'Result', value: 'Rezultāts', comment: 'Showing a single result in a List' },
    Results: { id: 'Results', value: 'Rezultāti', comment: 'As in showing N Results (plural) in a List' },
    RightAlign: { id: 'RightAlign', value: 'Līdzināt pa labi', comment: 'Right Align tooltip' },
    RightAlignText: { id: 'RightAlignText', value: 'Līdzināt pa labi', comment: 'Right Align Text tooltip' },
    Right: { id: 'Right', value: 'Pa labi', comment: 'Right' },
    Roles: { id: 'Roles', value: 'Lomas', comment: 'Roles tooltip' },
    RowHeight: { id: 'RowHeight', value: 'Rindas augstums', comment: 'Describes the Height for Rows in a Data Grid' },
    Ruby: { id: 'Ruby', value: 'Rubīna', comment: 'Color in our color pallette' },
    RunFilter: { id: 'RunFilter', value: 'Palaist filtru', comment: 'Execute the current filter criteria' },
    SameWindow: { id: 'SameWindow', value: 'Tas pats logs', comment: 'Contents open in the same browser window.' },
    Save: { id: 'Save', value: 'Saglabāt', comment: 'Save tooltip' },
    SaveCurrentView: { id: 'SaveCurrentView', value: 'Saglabāt pašreizējo skatu', comment: 'Datagrids contain view sets. This menu option saves them' },
    SavedViews: { id: 'SavedViews', value: 'Saglabātie skati', comment: 'Label for a list of Views' },
    Schedule: { id: 'Schedule', value: 'Grafiks', comment: 'Shows a schedule view' },
    Seconds: { id: 'Seconds', value: 'Sekundes', comment: 'the seconds portion of a time' },
    Search: { id: 'Search', value: 'Meklēt', comment: 'Search tooltip' },
    SearchColumnName: { id: 'SearchColumnName', value: 'Meklēt kolonnas nosaukumu', comment: 'Search for a datagrid column by name' },
    SearchFolder: { id: 'SearchFolder', value: 'Meklēt mapē', comment: 'Search Folder tooltip' },
    SearchList: { id: 'SearchList', value: 'Meklēt sarakstā', comment: 'Search List tooltip' },
    Select: { id: 'Select', value: 'Atlasīt', comment: 'text describing a select action' },
    SelectDay: { id: 'SelectDay', value: 'Atlasīt dienu', comment: 'Select a day in the calendar picker' },
    Selected: { id: 'Selected', value: 'Atlasīts', comment: 'text describing a selected object' },
    SelectAll: { id: 'SelectAll', value: 'Atlasīt visu', comment: 'describes the action of selecting all items available in a list' },
    Send: { id: 'Send', value: 'Nosūtīt', comment: 'Send tooltip' },
    SetTime: { id: 'SetTime', value: 'Iestatīt laiku', comment: 'button text that inserts time when clicked' },
    Settings: { id: 'Settings', value: 'Iestatījumi', comment: 'Settings tooltip' },
    Short: { id: 'Short', value: 'Īss', comment: 'Describes a Shorted Row Height in a grid/list' },
    ShowFilterRow: { id: 'ShowFilterRow', value: 'Rādīt filtra rindu', comment: 'Toggle a row with filer info above a list' },
    ShowLess: { id: 'ShowLess', value: 'Rādīt mazāk', comment: 'Show less form content' },
    ShowMore: { id: 'ShowMore', value: 'Rādīt vairāk', comment: 'Show more form content' },
    SickTime: { id: 'SickTime', value: 'Slimības laiks', comment: 'Time off sick from work' },
    Slate: { id: 'Slate', value: 'Zilganpelēka', comment: 'Color in our color pallette' },
    SlideOf: { id: 'SlideOf', value: '{0}. slaids no {1}', comment: 'Slide Text Showing current and total number of slides' },
    SlidesOf: { id: 'SlidesOf', value: '{0}. un {1}. slaids no {2}', comment: 'Slides Text Showing current slides and total number of slides' },
    SliderHandle: { id: 'SliderHandle', value: '[name of the control] turis', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control' },
    SliderMaximumHandle: { id: 'SliderMaximumHandle', value: '[name of the control] maksimālā diapazona turis', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control' },
    SliderMinimumHandle: { id: 'SliderMinimumHandle', value: '[name of the control] minimālā diapazona turis', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control' },
    SkipToMain: { id: 'SkipToMain', value: 'Pāriet uz galveno saturu', comment: 'Skip link in header, jumps when clicked on to main area' },
    Status: { id: 'Status', value: 'Statuss', comment: 'Status of someting thats submitted fx in progress, approved' },
    StartsWith: { id: 'StartsWith', value: 'Sākas ar', comment: 'for condition filtering' },
    StepsCompleted: { id: 'StepsCompleted', value: 'Pabeigtas {0} darbības no {1}', comment: 'steps of a wizard/chart' },
    StrikeThrough: { id: 'StrikeThrough', value: 'Pārsvītrot', comment: 'turn on and off strike through text in text editor (like word)' },
    SortAtoZ: { id: 'SortAtoZ', value: 'Kārtot augošā secībā', comment: 'Sort A to Z in icons for filtering' },
    SortZtoA: { id: 'SortZtoA', value: 'Kārtot dilstošā secībā', comment: 'Sort Z to A in icons for filtering' },
    SortDown: { id: 'SortDown', value: 'Kārtot uz leju', comment: 'Sort Down tooltip' },
    SortUp: { id: 'SortUp', value: 'Kārtot uz augšu', comment: 'Sort Up tooltip' },
    Subscript: { id: 'Subscript', value: 'Apakšraksts', comment: 'Turn on and off Subscript text in text editor (like word)' },
    Superscript: { id: 'Superscript', value: 'Augšraksts', comment: 'Turn on and off Superscript text in text editor (like word)' },
    Tabs: { id: 'Tabs', value: 'Cilnes...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu' },
    Tack: { id: 'Tack', value: 'Piespraust', comment: 'Pin an object' },
    Tall: { id: 'Tall', value: 'Garš', comment: 'Describes a Taller Row Height in a grid/list' },
    Target: { id: 'Target', value: 'Mērķis', comment: 'Label for an input to enter a Target (Url Attribute)' },
    TeamEvent: { id: 'TeamEvent', value: 'Komandas pasākums', comment: 'Having an event with a work team' },
    TestLocaleDefaults: { id: 'TestLocaleDefaults', value: 'Pārbaudīt lokalizācijas noklusējumus', comment: 'Do not translate' },
    TextColor: { id: 'TextColor', value: 'Teksta krāsa', comment: 'add or edit text color in the editor' },
    TextDropArea: { id: 'DropArea', value: 'Velciet un nometiet failus, lai augšupielādētu', comment: 'text for drop area for advanced fileupload' },
    TextDropAreaWithBrowse: { id: 'TextDropAreaWithBrowse', value: 'Velciet un nometiet vai <span class="hyperlink">atlasiet failus</span>, lai augšupielādētu', comment: 'text for drop area with browse for advanced fileupload' },
    TextBtnCancel: { id: 'TextBtnCancel', value: 'Atcelt šī faila augšupielādi', comment: 'text for cancel button for advanced fileupload' },
    TextBtnCloseError: { id: 'TextBtnCloseError', value: 'Aizvērt šo kļūdu', comment: 'text for error close button for advanced fileupload' },
    TextBtnRemove: { id: 'TextBtnRemove', value: 'Aizvērt šo kļūdu', comment: 'text for remove button for advanced fileupload' },
    Timer: { id: 'Timer', value: 'Taimeris', comment: 'Timer tooltip' },
    To: { id: 'To', value: 'Kam', comment: 'End of a range (of dates)' },
    Today: { id: 'Today', value: 'Šodien', comment: 'refering to today on a calendar' },
    ToggleBold: { id: 'ToggleBold', value: 'Pārslēgt tekstu treknrakstā', comment: 'turn on and off bold in text editor (like word)' },
    ToggleH3: { id: 'ToggleH3', value: 'Pārslēgt virsrakstu H3', comment: 'turn on and off heading 3 text' },
    ToggleH4: { id: 'ToggleH4', value: 'Pārslēgt virsrakstu H4', comment: 'turn on and off heading 4 text' },
    ToggleItalic: { id: 'ToggleItalic', value: 'Pārslēgt tekstu slīprakstā', comment: 'turn on and off Italic in text editor (like word)' },
    ToggleUnderline: { id: 'ToggleUnderline', value: 'Pārslēgt tekstu pasvītrojumā', comment: 'turn on and off Underline in text editor (like word)' },
    Toolbar: { id: 'Toolbar', value: 'Rīkjosla', comment: 'describing the toolbar component' },
    TopAlign: { id: 'TopAlign', value: 'Līdzināt pie augšas', comment: 'Top Align tooltip' },
    Total: { id: 'Total', value: 'Kopā', comment: 'Mathematic total of a calculation' },
    Totals: { id: 'Totals', value: 'Kopsummas', comment: 'Mathematic total of a calculation (plural)' },
    TreeCollapse: { id: 'TreeCollapse', value: 'Sakļaut koku', comment: 'Tree Collapse tooltip' },
    TreeExpand: { id: 'TreeExpand', value: 'Izvērst koku', comment: 'Tree Expand tooltip' },
    Turquoise: { id: 'Turquoise', value: 'Tirkīzzila', comment: 'Color in our color pallette' },
    Up: { id: 'Up', value: 'Uz augšu', comment: 'Up tooltip' },
    UpComingEvents: { id: 'UpComingEvent', value: 'Aktuālie notikumi', comment: 'List of upcoming calendar events' },
    UpComingTimeOff: { id: 'UpComingTimeOff', value: 'Aktuālais brīvais laiks', comment: 'As in time off work' },
    Upload: { id: 'Upload', value: 'Augšupielādēt', comment: 'Upload tooltip' },
    UnavailableDate: { id: 'UnavailableDate', value: 'Datums nav pieejams', comment: 'Unavailable Date Text' },
    Underline: { id: 'Underline', value: 'Pasvītrot', comment: 'Make text Underlined' },
    Undo: { id: 'Undo', value: 'Atsaukt', comment: 'Undo tooltip' },
    Unlocked: { id: 'Unlocked', value: 'Atbloķēts', comment: 'Unlocked tooltip' },
    UnorderedList: { id: 'UnorderedList', value: 'Ievietot/noņemt sarakstu ar aizzīmēm', comment: 'Insert an Unordered list in the editor' },
    Unsupported: { id: 'Unsupported', value: 'Šis saturs nav pieejams, jo tas izmanto līdzekļus, kas netiek atbalstīti jūsu pašreizējā pārlūkprogrammas versijā.', comment: 'Suggesting browser upgrade for missing features.' },
    Url: { id: 'Url', value: 'Vietrādis URL', comment: 'Url tooltip' },
    UseArrow: { id: 'UseArrow', value: '. Izmantojiet bulttaustiņus, lai atlasītu.', comment: 'Instructional comments for screen readers' },
    UseEnter: { id: 'UseEnter', value: '. Izmantojiet taustiņu Ievadīt vai lejupvērsto bultiņu uzmeklēšanai.', comment: 'Instructional comments for screen readers' },
    User: { id: 'User', value: 'Lietotājs', comment: 'User tooltip' },
    UserProfile: { id: 'UserProfile', value: 'Lietotāja profils', comment: 'User Profile tooltip' },
    Version: { id: 'Version', value: 'IDS versija', comment: 'Version of IDS' },
    VerticalMiddleAlign: { id: 'VerticalMiddleAlign', value: 'Vertikāli līdzināt pie centra', comment: 'Vertical Align tooltip' },
    ViewSource: { id: 'ViewSource', value: 'Skatīt avotu', comment: 'Toggle the source view in the editor' },
    ViewVisual: { id: 'ViewVisual', value: 'Skatīt rezultātu', comment: 'Toggle the visual view in the editor' },
    Week: { id: 'Week', value: 'Nedēļa', comment: 'Shows a view of the current weeks events' },
    Year: { id: 'Year', value: 'Gads', comment: 'As in a date year' },
    Yes: { id: 'Yes', value: 'Jā', comment: 'On a dialog button' }
  }
});
