/* eslint-disable no-bitwise, no-undef */

// Get Latest from http://www.unicode.org/Public/cldr/25/
Soho.Locale.addCulture('sk-SK', {
  // layout/language
  language: 'sk',
  englishName: 'Slovak (Slovakia)',
  nativeName: 'Slovenčina (Slovensko)',
  // layout/orientation/@characters
  direction: 'left-to-right',
  // ca-gregorian
  calendars: [{
    // ca-gregorian/main/dates/calendars/gregorian/dateFormats/
    dateFormat: {
      separator: '.', // Infered
      timeSeparator: ':',
      short: 'd.M.yyyy', // use four digit year
      medium: 'd.M.yyyy',
      long: 'd. MMMM yyyy',
      full: 'EEEE, d. MMMM yyyy',
      month: 'd. MMMM',
      year: 'MMMM y',
      timestamp: 'H:mm:ss',
      datetime: 'd.M.yyyy H:mm',
      timezone: 'd.M.yyyy H:mm zz',
      timezoneLong: 'd.M.yyyy H:mm zzzz'
    }, // Infered short + short gregorian/dateTimeFormats
    // ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
    days: {
      wide: ['nedeľa', 'pondelok', 'utorok', 'streda', 'štvrtok', 'piatok', 'sobota'],
      abbreviated: ['ned', 'pon', 'uto', 'str', 'štv', 'pia', 'sob'],
      narrow: ['N', 'P', 'U', 'S', 'Š', 'P', 'S']
    },
    // ca-gregorian/main/dates/calendars/gregorian/months/format/wide
    months: {
      wide: ['januára', 'februára', 'marca', 'apríla', 'mája', 'júna', 'júla', 'augusta', 'septembra', 'októbra', 'novembra', 'decembra'],
      abbreviated: ['jan', 'feb', 'mar', 'apr', 'máj', 'jún', 'júl', 'aug', 'sep', 'okt', 'nov', 'dec']
    },
    // ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
    timeFormat: 'H:mm',
    // ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
    dayPeriods: ['AM', 'PM']
  }],
  // numbers/currencyFormats-numberSystem-latn/standard
  currencySign: 'Sk',
  currencyFormat: '#,##0.00 ¤',
  // numbers/symbols-numberSystem-latn
  numbers: {
    percentSign: '%',
    percentFormat: '#,##0 %',
    minusSign: '-',
    decimal: ',',
    group: ' '
  },
  // Resx - Provided By Translation Team
  messages: {
    AboutText: { id: 'AboutText', value: 'Copyright &copy; {0} Infor. Všetky práva vyhradené. Slovné a dizajnové značky uvedené v tomto dokumente sú ochranné známky a/alebo registrované ochranné známky spoločnosti Infor a/alebo jej pridružených a dcérskych spoločností. Všetky práva vyhradené. Všetky ostatné ochranné známky uvedené v tomto dokumente sú majetkom ich príslušných vlastníkov.' },
    Actions: { id: 'Actions', value: 'Akcie', comment: 'Tooltip text for the action button with additional in context actions' },
    AdditionalItems: { id: 'AdditionalItems', value: 'Ďalšie položky', comment: 'Button tooltip used in a list of movable items' },
    Add: { id: 'Add', value: 'Pridať', comment: 'Add' },
    AddComments: { id: 'AddComments', value: 'Pridať komentáre', comment: 'Add comments to a form of data' },
    AddNewTab: { id: 'AddNewTab', value: 'Pridať novú kartu', comment: 'Attached to a button that adds new tabs' },
    AdministrativeLeave: { id: 'AdministrativeLeave', value: 'Administratívna dovolenka', comment: 'As in vacation time from work' },
    AdvancedFilter: { id: 'AdvancedFilter', value: 'Vytvoriť rozšírený filter', comment: 'In a data grid active an advanced filtering feature' },
    Alert: { id: 'Alert', value: 'Upozornenie', comment: 'Alert' },
    AlertOnPage: { id: 'AlertOnPage', value: 'Správy upozornení na stránke', comment: 'Alert message(s) on page n' },
    All: { id: 'All', value: 'Všetky', comment: 'All items in the context of a filter' },
    AllResults: { id: 'AllResults', value: 'Všetky výsledky pre', comment: 'Search Results Text' },
    AligntoBottom: { id: 'AligntoBottom', value: 'Zarovnať na spodok', comment: 'Align to Bottom tooltip' },
    AlignCenterHorizontally: { id: 'AlignCenterHorizontally', value: 'Vodorovne zarovnať na stred', comment: 'Align Center Horizontally tooltip' },
    Amber: { id: 'Amber', value: 'Jantár', comment: 'Color in our color pallette' },
    Amethyst: { id: 'Amethyst', value: 'Ametyst', comment: 'Color in our color pallette' },
    Apply: { id: 'Apply', value: 'Použiť', comment: 'Text in a button to apply an action' },
    AppMenuTriggerText: { id: 'AppMenuTriggerText', value: 'Ponuka', comment: 'Text in a special Module Tab used to trigger an Application Menu open or closed' },
    Attach: { id: 'Attach', value: 'Pripojiť', comment: 'Attach' },
    Available: { id: 'Available', value: 'Dostupné', comment: 'Button tooltip used in a list of movable items' },
    Azure: { id: 'Azure', value: 'Azúrové', comment: 'Color in our color pallette' },
    BackgroundColor: { id: 'BackgroundColor', value: 'Farba pozadia', comment: 'add or edit text background color in the editor' },
    Between: { id: 'Between', value: 'Medzi', comment: 'Between in icons for filtering' },
    Blockquote: { id: 'Blockquote', value: 'Blok citácie', comment: 'insert a block quote in the editor' },
    Bold: { id: 'Bold', value: 'Tučné', comment: 'Make text Bold' },
    Bookmarked: { id: 'Bookmarked', value: 'Označené záložkou', comment: 'Bookmark filled - Element is already bookmarked' },
    BookmarkThis: { id: 'BookmarkThis', value: 'Označiť záložkou', comment: 'Bookmark an element' },
    Breadcrumb: { id: 'Breadcrumb', value: 'Popis cesty', comment: 'Text describing the Breadcrumb' },
    Browser: { id: 'Browser', value: 'Prehliadač', comment: 'As in a Web Browser' },
    BulletedList: { id: 'BulletedList', value: 'Zoznam s odrážkami', comment: 'Bulleted List tooltip' },
    Calendar: { id: 'Calendar', value: 'Kalendár', comment: 'Inline Text for the title of the Calendar control' },
    Camera: { id: 'Camera', value: 'Kamera', comment: 'Camera tooltip' },
    Cancel: { id: 'Cancel', value: 'Zrušiť', comment: 'Cancel tooltip' },
    CapsLockOn: { id: 'CapsLockOn', value: 'Zapnutý kláves Caps Lock', comment: 'Caps Lock On message' },
    Cart: { id: 'Cart', value: 'Košík', comment: 'Cart tooltip' },
    CenterText: { id: 'CenterText', value: 'Centrovať', comment: 'An Icon Tooltip' },
    CharactersLeft: { id: 'CharactersLeft', value: 'Počet zostávajúcich znakov: {0}', comment: 'indicator showing how many more characters you can type.' },
    CharactersMax: { id: 'CharactersMax', value: 'Maximálny počet znakov ', comment: 'indicator showing how many max characters you can type.' },
    ChangeSelection: { id: 'ChangeSelection', value: '. Výber môžete zmeniť pomocou klávesov so šípkami.', comment: 'Audible Text for drop down list help' },
    ChangeView: { id: 'ChangeView', value: 'Zmeniť zobrazenie', comment: 'Change the current page from a list of options' },
    Checkbox: { id: 'Checkbox', value: 'Začiarkavacie políčko', comment: 'Checkbox tooltip' },
    Checked: { id: 'Checked', value: 'Začiarknuté', comment: 'Checked tooltip' },
    Clear: { id: 'Clear', value: 'Vymazať', comment: 'Tooltip for a Clear Action' },
    ClearFilter: { id: 'ClearFilter', value: 'Vymazať filter', comment: 'Clear the current filter criteria' },
    ClearFormatting: { id: 'ClearFormatting', value: 'Vymazať formátovanie', comment: 'Clear the formatting in editor' },
    ClearSelection: { id: 'ClearSelection', value: '(Vymazať výber)', comment: 'clear dropdown selection' },
    Clock: { id: 'Clock', value: 'Hodiny', comment: 'Clock tooltip' },
    Close: { id: 'Close', value: 'Zavrieť', comment: 'Tooltip for a Close Button Action' },
    Clickable: { id: 'Clickable', value: 'Možnosť kliknúť v editore', comment: 'Clickable in editor' },
    Copy: { id: 'Copy', value: 'Kopírovať', comment: 'Copy tooltip' },
    Collapse: { id: 'Collapse', value: 'Zbaliť', comment: 'Collapse / close a tree/submenu' },
    CollapseAppTray: { id: 'CollapseAppTray', value: 'Zbaliť panel aplikácie', comment: 'Collapse App Tray tooltip' },
    Columns: { id: 'Columns', value: 'Stĺpce', comment: 'Columns tooltip' },
    Comments: { id: 'Comments', value: 'Komentáre', comment: 'Comments on an form' },
    CompanyHoliday: { id: 'CompanyHoliday', value: 'Firemná dovolenka', comment: 'A holiday provided by work.' },
    Component: { id: 'Component', value: 'Komponent', comment: 'As in a UI component - building block.' },
    Compose: { id: 'Compose', value: 'Vytvoriť', comment: 'Compose tooltip' },
    Completed: { id: 'Completed', value: 'Dokončené', comment: 'Text For a Completed Status' },
    Confirm: { id: 'Confirm', value: 'Potvrdiť', comment: 'Confirm tooltip' },
    ConfirmOnPage: { id: 'ConfirmOnPage', value: 'Správy potvrdení na stránke', comment: 'Confirm message(s) on page n' },
    CookiesEnabled: { id: 'CookiesEnabled', value: 'Súbory cookie sú povolené', comment: 'Returns if browser cookies are enabled or not.' },
    Contains: { id: 'Contains', value: 'Obsahuje', comment: 'Contains in icons for filtering' },
    CssClass: { id: 'CssClass', value: 'Trieda CSS', comment: 'Label for entering a Css Class name' },
    Cut: { id: 'Cut', value: 'Vystrihnúť', comment: 'Cut tooltip' },
    Date: { id: 'Date', value: 'Dátum', comment: 'Describes filtering by a date data type' },
    Day: { id: 'Day', value: 'Deň', comment: 'Shows view with day events' },
    Days: { id: 'Days', value: 'Dni ', comment: 'Show how many days until an event' },
    DaysOverdue: { id: 'DaysOverdue', value: 'Počet dní po termíne: {0}', comment: 'For a task /date UI' },
    DaysRemaining: { id: 'DaysRemaining', value: 'Počet zostávajúcich dní: {0}', comment: 'For a task /date UI' },
    Delete: { id: 'Delete', value: 'Odstrániť', comment: 'Delete Toolbar Action Tooltip' },
    DeviceName: { id: 'Device', value: 'Zariadenie', comment: 'Name of the Device' },
    DistributeHoriz: { id: 'DistributeHoriz', value: 'Prerozdeliť vodorovne', comment: 'Icon button tooltip for action that distributes elements across Horizontally' },
    Document: { id: 'Document', value: 'Dokument', comment: 'Document tooltip' },
    DiscretionaryTimeOff: { id: 'DiscretionaryTimeOff', value: 'Dobrovoľné voľno', comment: 'As in work time off' },
    Dirty: { id: 'Dirty', value: 'Riadok sa zmenil', comment: 'Record is dirty / modified' },
    Drilldown: { id: 'Drilldown', value: 'Prejsť na detaily', comment: 'Drill by moving page flow into a record' },
    Drillup: { id: 'Drillup', value: 'Prejsť na súhrn', comment: 'Opposite of Drilldown, move back up to a larger set of records' },
    Dropdown: { id: 'Dropdown', value: 'Rozbaľovací zoznam', comment: 'Dropdown' },
    DoesNotContain: { id: 'DoesNotContain', value: 'Neobsahuje', comment: 'Does Not Contain in icons for filtering' },
    DoesNotEndWith: { id: 'DoesNotEndWith', value: 'Nekončí sa na', comment: 'For condition filtering' },
    DoesNotEqual: { id: 'DoesNotEqual', value: 'Nerovná sa', comment: 'Does Not Equal in icons for filtering' },
    DoesNotStartWith: { id: 'DoesNotStartWith', value: 'Nezačína sa na', comment: 'For condition filtering' },
    Down: { id: 'Down', value: 'Dole', comment: 'Down tooltip' },
    Download: { id: 'Download', value: 'Prevziať', comment: 'Download tooltip' },
    Duplicate: { id: 'Duplicate', value: 'Duplikovať', comment: 'Duplicate tooltip' },
    EitherSelectedOrNotSelected: { id: 'EitherSelectedOrNotSelected', value: 'Buď vybrané, alebo nevybrané', comment: 'Either Selected Or NotSelected in icons for filtering' },
    EndsWith: { id: 'EndsWith', value: 'Končí sa na', comment: 'for condition filtering' },
    EnterComments: { id: 'EnterComments', value: 'Tu zadajte komentáre...', comment: 'Placeholder text for a text input (comments)' },
    Error: { id: 'Error', value: 'Chyba', comment: 'Title, Spoken Text describing fact an error has occured' },
    ErrorAllowedTypes: { id: 'ErrorAllowedTypes', value: 'Typ súboru nie je povolený', comment: 'Error string for file-upload' },
    ErrorMaxFileSize: { id: 'ErrorMaxFileSize', value: 'Bol presiahnutý limit veľkosti súboru', comment: 'Error string for file-upload' },
    ErrorMaxFilesInProcess: { id: 'ErrorMaxFilesInProcess', value: 'Bol presiahnutý limit povoleného počtu súborov', comment: 'Error string for file-upload' },
    ErrorOnPage: { id: 'ErrorOnPage', value: 'Chybové hlásenia na stránke', comment: 'Error message(s) on page n' },
    EmailValidation: { id: 'EmailValidation', value: 'E-mailová adresa nie je platná', comment: 'This the rule for email validation' },
    Emerald: { id: 'Emerald', value: 'Smaragd', comment: 'Color in our color pallette' },
    Expand: { id: 'Expand', value: 'Rozbaliť', comment: 'Expand open a tree/submenu' },
    ExpandAppTray: { id: 'ExpandAppTray', value: 'Rozbaliť panel aplikácie', comment: 'ExpandAppTray tooltip' },
    ExpandCollapse: { id: 'ExpandCollapse', value: 'Rozbaliť/zbaliť', comment: 'Text to toggle a button in a container.' },
    ExportAsSpreadsheet: { id: 'ExportAsSpreadsheet', value: 'Exportovať ako tabuľkový hárok', comment: 'Export as Spreadsheet tooltip' },
    Edit: { id: 'Edit', value: 'Upraviť', comment: 'Edit tooltip' },
    Equals: { id: 'Equals', value: 'Rovná sa', comment: 'Equals in icons for filtering' },
    Event: { id: 'Event', value: 'Udalosť', comment: 'As in an event that would be in a calendar' },
    ExitFullView: { id: 'ExitFullView', value: 'Ukončiť úplné zobrazenie', comment: 'Exit Full View tooltip' },
    Export: { id: 'Export', value: 'Exportovať', comment: 'Export tooltip' },
    ExportToExcel: { id: 'ExportToExcel', value: 'Exportovať do súboru programu Excel', comment: 'Export To Excel menu option in datagrid' },
    Favorite: { id: 'Favorite', value: 'Obľúbené', comment: 'A favorite item' },
    FileUpload: { id: 'FileUpload', value: 'Nahratie súboru. Stlačte kláves Enter a vyhľadajte súbor', comment: 'Screen Reader instructions' },
    FieldFilter: { id: 'FieldFilter', value: 'Filter polí', comment: 'Used for Field Filter' },
    Filter: { id: 'Filter', value: 'Filter', comment: 'Filter tooltip' },
    FirstPage: { id: 'FirstPage', value: 'Prvá strana', comment: 'First Page tooltip' },
    Folder: { id: 'Folder', value: 'Priečinok', comment: 'Folder tooltip' },
    From: { id: 'From', value: 'Od', comment: 'Start of a range (of dates)' },
    FullView: { id: 'FullView', value: 'Úplné zobrazenie', comment: 'Full View tooltip' },
    GoForward: { id: 'GoForward', value: 'Dopredu', comment: 'Move Page / object this direction' },
    GoBack: { id: 'GoBack', value: 'Späť', comment: 'Move Page / object this directionp' },
    GoDown: { id: 'GoDown', value: 'Nadol', comment: 'Move Page / object this directionp' },
    GoUp: { id: 'GoUp', value: 'Nahor', comment: 'Move Page / object this direction' },
    Go: { id: 'Go', value: 'Prejsť', comment: 'Go, perform a movement, start a search, move to the next "thing" in a workflow.' },
    Graphite: { id: 'Graphite', value: 'Grafit', comment: 'Color in our color pallette' },
    GreaterOrEquals: { id: 'GreaterOrEquals', value: 'Väčšie ako alebo rovná sa', comment: 'Greater Than Or Equals in icons for filtering' },
    GreaterThan: { id: 'GreaterThan', value: 'Väčšie ako', comment: 'Greater Than in icons for filtering' },
    Grid: { id: 'Grid', value: 'Tabuľka', comment: 'Grid tooltip' },
    Hour: { id: 'Hour', value: 'Hodina', comment: 'the hour portion of a time' },
    Hours: { id: 'Hours', value: 'Hodiny', comment: 'the hour portion of a time (plural)' },
    HeadingThree: { id: 'HeadingThree', value: 'Nadpis tri', comment: 'Heading Three tooltip' },
    HeadingFour: { id: 'HeadingFour', value: 'Nadpis štyri', comment: 'Heading Four tooltip' },
    Highest: { id: 'Highest', value: 'Najvyššie', comment: 'Highest Four tooltip' },
    Home: { id: 'Home', value: 'Domov', comment: 'Home tooltip' },
    HtmlView: { id: 'HtmlView', value: 'Zobrazenie HTML', comment: 'Html View tooltip' },
    Image: { id: 'Image', value: 'Obrázok', comment: 'Image of something' },
    Import: { id: 'Import', value: 'Importovať', comment: 'Import tooltip' },
    Info: { id: 'Info', value: 'Informácie', comment: 'Info tooltip' },
    InfoOnPage: { id: 'InfoOnPage', value: 'Informačné správy na stránke', comment: 'Information message(s) on page n' },
    InProgress: { id: 'In Progress', value: 'Prebieha', comment: 'Info tooltip that an action is in progress' },
    Insert: { id: 'Insert', value: 'Vložiť', comment: 'Insert Modal Dialog Button' },
    InsertAnchor: { id: 'InsertAnchor', value: 'Vložiť ukotvenie', comment: 'Insert Acnhor (link) in an editor' },
    InsertImage: { id: 'InsertImage', value: 'Vložiť obrázok', comment: 'Insert Image in an editor' },
    InsertLink: { id: 'InsertLink', value: 'Vložiť prepojenie', comment: 'Insert Link in an editor' },
    InsertUrl: { id: 'InsertUrl', value: 'Vložiť adresu URL', comment: 'Insert a Url in an editor' },
    Italic: { id: 'Italic', value: 'Kurzíva', comment: 'Make Text Italic' },
    InvalidDate: { id: 'InvalidDate', value: 'Neplatný dátum', comment: 'validation message for wrong date format (short)' },
    InvalidTime: { id: 'InvalidTime', value: 'Neplatný čas', comment: 'validation message for wrong time format' },
    Inventory: { id: 'Inventory', value: 'Inventár', comment: 'Icon button tooltop for Inventory Action' },
    InRange: { id: 'InRange', value: 'V rozsahu', comment: 'In Range in icons for filtering' },
    IsEmpty: { id: 'IsEmpty', value: 'Je prázdne', comment: 'Is Empty in icons for filtering' },
    IsNotEmpty: { id: 'IsNotEmpty', value: 'Nie je prázdne', comment: 'Is Not Empty in icons for filtering' },
    ItemsSelected: { id: 'ItemsSelected', value: 'Vybrané položky', comment: 'Num of Items selected for swaplist' },
    JustifyCenter: { id: 'JustifyCenter', value: 'Centrovať', comment: 'justify text to center in the editor' },
    JustifyLeft: { id: 'JustifyLeft', value: 'Zarovnať vľavo', comment: 'justify text to left in the editor' },
    JustifyRight: { id: 'JustifyRight', value: 'Zarovnať vpravo', comment: 'justify text to right in the editor' },
    Keyword: { id: 'Keyword', value: 'Kľúčové slovo', comment: 'Describes filtering by a keyword search' },
    Launch: { id: 'Launch', value: 'Spustiť', comment: 'Launch' },
    LastPage: { id: 'LastPage', value: 'Posledná strana', comment: 'Last Page tooltip' },
    Left: { id: 'Left', value: 'Vľavo', comment: 'Left tooltip' },
    Legend: { id: 'Legend', value: 'Legenda', comment: 'As in a chart legend' },
    LessOrEquals: { id: 'LessOrEquals', value: 'Menej ako alebo rovná sa', comment: 'Less Than Or Equals in icons for filtering' },
    LessThan: { id: 'LessThan', value: 'Menej ako', comment: 'Less Than in icons for filtering' },
    Link: { id: 'Link', value: 'Prepojenie', comment: 'Link - as in hyperlink - icon tooltop' },
    Load: { id: 'Load', value: 'Načítať', comment: 'Load icon tooltip' },
    Loading: { id: 'Loading', value: 'Načítava sa', comment: 'Text below spinning indicator to indicate loading' },
    Locale: { id: 'Locale', value: 'Miestne nastavenie', comment: 'The users locale string for example en-US, it-It' },
    Locked: { id: 'Locked', value: 'Uzamknuté', comment: 'Locked tooltip' },
    Logout: { id: 'Logout', value: 'Odhlásiť sa', comment: 'Log out of the application' },
    Lookup: { id: 'Lookup', value: 'Vyhľadávanie', comment: 'Lookup - As in looking up a record or value' },
    Lowest: { id: 'Lowest', value: 'Najnižšie', comment: 'Lowest - As in Lowest value' },
    Mail: { id: 'Mail', value: 'Pošta', comment: 'Mail tooltip' },
    MapPin: { id: 'MapPin', value: 'Pripnúť', comment: 'Map Pin tooltip' },
    Maximize: { id: 'Maximize', value: 'Maximalizovať', comment: 'Maximize a screen or dialog in the UI' },
    Median: { id: 'Median', value: 'Medián', comment: 'Median in Mathematics' },
    Medium: { id: 'Medium', value: 'Stredné', comment: 'Describes a Medium sized Row Height in a grid/list' },
    Menu: { id: 'Menu', value: 'Ponuka', comment: 'Menu tooltip' },
    MingleShare: { id: 'MingleShare', value: 'Zdieľať s Ming.le', comment: 'Share the contextual object/action in the mingle system' },
    Minutes: { id: 'Minutes', value: 'Minúty', comment: 'the minutes portion of a time' },
    Minimize: { id: 'Minimize', value: 'Minimalizovať', comment: 'Minimize tooltip' },
    Minus: { id: 'Minus', value: 'Mínus', comment: 'Minus tooltip' },
    Mobile: { id: 'Mobile', value: 'Mobil', comment: 'Indicates a mobile device (phone tablet ect)' },
    Month: { id: 'Month', value: 'Mesiac', comment: 'As in a date month' },
    More: { id: 'More', value: 'Viac...', comment: 'Text Indicating More Buttons or form content' },
    MoreActions: { id: 'MoreActions', value: 'Viac akcií', comment: 'Text on the More Actions button indictating hidden functions' },
    MoveToLeft: { id: 'MoveToLeft', value: 'Posunúť vľavo', comment: 'Button tooltip used in a list of movable items' },
    MoveToRight: { id: 'MoveToRight', value: 'Posunúť vpravo', comment: 'Button tooltip used in a list of movable items' },
    MsgDirty: { id: 'MsgDirty', value: ', Upravené', comment: 'for modified form fields' },
    New: { id: 'New', value: 'Nové', comment: 'Add new rowstatus in datagrid' },
    NewDocument: { id: 'NewDocument', value: 'Nový dokument', comment: 'New Document tooltip' },
    NewItem: { id: 'NewItem', value: 'Nová položka', comment: 'New item in listbuilder' },
    NewWindow: { id: 'NewWindow', value: 'Nové okno', comment: 'Contents open in a new browser window.' },
    Next: { id: 'Next', value: 'Ďalšie', comment: 'Next in icons tooltip' },
    NextPage: { id: 'NextPage', value: 'Ďalšia strana', comment: 'Next on Pager' },
    NextMonth: { id: 'NextMonth', value: 'Ďalší mesiac', comment: 'the label for the button that moves calendar to next/prev' },
    No: { id: 'No', value: 'Nie', comment: 'On a dialog button' },
    NoData: { id: 'NoData', value: 'Nie sú k dispozícii žiadne údaje', comment: 'Shown when there is no rows shown in a list' },
    NoDataFilter: { id: 'NoDataFilter', value: 'Nie sú k dispozícii žiadne údaje, vyberte iné nastavenia filtra, ak chcete zobraziť ďalšie výsledky.', comment: 'Shown when there is no rows shown in a list' },
    NoDataList: { id: 'NoDataList', value: 'Nie sú k dispozícii žiadne údaje, vyberte položky v zozname vyššie, ak chcete zobraziť ďalšie výsledky.', comment: 'Shown when there is no rows shown in a list' },
    None: { id: 'None', value: 'Žiadne', comment: 'None to pick clear color' },
    NoResults: { id: 'NoResults', value: 'Žiadne výsledky', comment: 'Search Results Text' },
    Normal: { id: 'Normal', value: 'Bežné', comment: 'Normal row height' },
    Notes: { id: 'Notes', value: 'Poznámky', comment: 'Notes icon tooltip' },
    NotSelected: { id: 'NotSelected', value: 'Nevybrané', comment: 'Not Selected in icons for filtering' },
    NumberList: { id: 'NumberList', value: 'Číslovaný zoznam', comment: 'Number List tooltip' },
    Ok: { id: 'Ok', value: 'OK', comment: 'Ok button on a dialog' },
    OpenBackClose: { id: 'OpenBackClose', value: 'Otvoriť/Späť/Zavrieť', comment: 'Open / Back / Close tooltip' },
    OpenClose: { id: 'OpenClose', value: 'Otvoriť/Zavrieť', comment: 'Open / Close tooltip' },
    OperatingSystem: { id: 'OperatingSystem', value: 'Operačný systém', comment: 'Device Operating System' },
    OrderedList: { id: 'OrderedList', value: 'Vložiť/odstrániť číslovaný zoznam', comment: 'Insert an Ordered list in the editor' },
    Page: { id: 'Page', value: 'strana ', comment: 'Text on the pager links' },
    PageOf: { id: 'PageOf', value: 'Strana {0} z {1}', comment: 'Pager Text Showing current and number of pages' },
    PageOn: { id: 'PageOn', value: 'Momentálne ste na strane ', comment: 'Text on the pager links' },
    PaidTimeOff: { id: 'PaidTimeOff', value: 'Platené voľno', comment: 'As in vacation from work' },
    Paste: { id: 'Paste', value: 'Prilepiť', comment: 'Paste icon tooltip' },
    PasswordValidation: { id: 'PasswordValidation', value: '<strong>Požiadavky na heslo:</strong> <br>musí obsahovať aspoň 10 znakov,<br>musí obsahovať aspoň jedno veľké písmeno,<br>musí obsahovať aspoň jedno malé písmeno,<br>musí obsahovať aspoň jeden špeciálny znak,<br>nesmie obsahovať vaše používateľské meno,<br>nesmie byť rovnaké ako v minulosti použité heslo.<br>', comment: 'Password validation requirements' },
    PasswordConfirmValidation: { id: 'PasswordConfirmValidation', value: 'Heslá sa musia zhodovať', comment: 'Password Confirm validation' },
    Peak: { id: 'Peak', value: 'Špička', comment: 'the max or peak value in a chart' },
    Pending: { id: 'Pending', value: 'Čakajúce', comment: 'An event or task is pending' },
    PersonalizeColumns: { id: 'PersonalizeColumns', value: 'Prispôsobiť stĺpce', comment: 'Customize Columns in a Grid' },
    Plan: { id: 'Plan', value: 'Plán', comment: 'As in type of vacation plan' },
    Platform: { id: 'Platform', value: 'Platforma', comment: 'The users operating system i.e. mac, windows' },
    Period: { id: 'Period', value: 'Obdobie', comment: 'the am/pm portion of a time' },
    PressDown: { id: 'PressDown', value: 'Stlačte šípku nadol a vyberte dátum', comment: 'the audible label for Tooltip about how to operate the date picker' },
    PressShiftF10: { id: 'PressShiftF10', value: 'Stlačením kombinácie klávesov Shift + F10 zobrazte kontextovú ponuku.', comment: 'the audible infor for screen readers on how to use a field with a popup menu' },
    Previous: { id: 'Previous', value: 'Predchádzajúce', comment: 'Previous icon tooltip - moved to previous record' },
    PreviousMonth: { id: 'PreviousMonth', value: 'Predchádzajúci mesiac', comment: 'the label for the button that moves calendar to next/prev' },
    PreviousPage: { id: 'PreviousPage', value: 'Predchádzajúca strana', comment: 'Previous Page tooltip' },
    Print: { id: 'Print', value: 'Tlačiť', comment: 'Print tooltip' },
    Range: { id: 'Range', value: 'Rozsah', comment: 'Range for tooltip' },
    RecordsPerPage: { id: 'RecordsPerPage', value: 'Počet záznamov na stranu: {0}', comment: 'Dropdown allows the user to select how many visible records {} shows select value.' },
    Redo: { id: 'Redo', value: 'Znova', comment: 'Redo tooltip' },
    ReorderRows: { id: 'ReorderRows', value: 'Zmeniť poradie stĺpcov', comment: 'Drag and Reorder Grid Rows' },
    Refresh: { id: 'Refresh', value: 'Obnoviť', comment: 'Refresh tooltip' },
    RequestTimeOff: { id: 'RequestTimeOff', value: 'Požiadať o voľno', comment: 'Making a request for time off work.' },
    Required: { id: 'Required', value: 'Požadované', comment: 'indicates a form field is manditory' },
    Reset: { id: 'Reset', value: 'Obnoviť', comment: 'Reset tooltip' },
    ResetDefault: { id: 'ResetDefault', value: 'Obnoviť predvolené nastavenia', comment: 'Reset Datagrid Columns, Filter and other Layout' },
    Result: { id: 'Result', value: 'Výsledok', comment: 'Showing a single result in a List' },
    Results: { id: 'Results', value: 'Výsledky', comment: 'As in showing N Results (plural) in a List' },
    RightAlign: { id: 'RightAlign', value: 'Zarovnať vpravo', comment: 'Right Align tooltip' },
    RightAlignText: { id: 'RightAlignText', value: 'Zarovnať vpravo', comment: 'Right Align Text tooltip' },
    Right: { id: 'Right', value: 'Vpravo', comment: 'Right' },
    Roles: { id: 'Roles', value: 'Roly', comment: 'Roles tooltip' },
    RowHeight: { id: 'RowHeight', value: 'Výška riadka', comment: 'Describes the Height for Rows in a Data Grid' },
    Ruby: { id: 'Ruby', value: 'Rubín', comment: 'Color in our color pallette' },
    RunFilter: { id: 'RunFilter', value: 'Spustiť filter', comment: 'Execute the current filter criteria' },
    SameWindow: { id: 'SameWindow', value: 'To isté okno', comment: 'Contents open in the same browser window.' },
    Save: { id: 'Save', value: 'Uložiť', comment: 'Save tooltip' },
    SaveCurrentView: { id: 'SaveCurrentView', value: 'Uložiť aktuálne zobrazenie', comment: 'Datagrids contain view sets. This menu option saves them' },
    SavedViews: { id: 'SavedViews', value: 'Uložené zobrazenia', comment: 'Label for a list of Views' },
    Schedule: { id: 'Schedule', value: 'Plán', comment: 'Shows a schedule view' },
    Seconds: { id: 'Seconds', value: 'Sekundy', comment: 'the seconds portion of a time' },
    Search: { id: 'Search', value: 'Vyhľadať', comment: 'Search tooltip' },
    SearchColumnName: { id: 'SearchColumnName', value: 'Vyhľadať názov stĺpca', comment: 'Search for a datagrid column by name' },
    SearchFolder: { id: 'SearchFolder', value: 'Hľadať v priečinku', comment: 'Search Folder tooltip' },
    SearchList: { id: 'SearchList', value: 'Zoznam vyhľadávania', comment: 'Search List tooltip' },
    Select: { id: 'Select', value: 'Vybrať', comment: 'text describing a select action' },
    SelectDay: { id: 'SelectDay', value: 'Vybrať deň', comment: 'Select a day in the calendar picker' },
    Selected: { id: 'Selected', value: 'Vybraté', comment: 'text describing a selected object' },
    SelectAll: { id: 'SelectAll', value: 'Vybrať všetky', comment: 'describes the action of selecting all items available in a list' },
    Send: { id: 'Send', value: 'Odoslať', comment: 'Send tooltip' },
    SetTime: { id: 'SetTime', value: 'Nastaviť čas', comment: 'button text that inserts time when clicked' },
    Settings: { id: 'Settings', value: 'Nastavenia', comment: 'Settings tooltip' },
    Short: { id: 'Short', value: 'Krátke', comment: 'Describes a Shorted Row Height in a grid/list' },
    ShowFilterRow: { id: 'ShowFilterRow', value: 'Zobraziť riadok filtra', comment: 'Toggle a row with filer info above a list' },
    ShowLess: { id: 'ShowLess', value: 'Zobraziť menej', comment: 'Show less form content' },
    ShowMore: { id: 'ShowMore', value: 'Zobraziť viac', comment: 'Show more form content' },
    SickTime: { id: 'SickTime', value: 'Práceneschopnosť', comment: 'Time off sick from work' },
    Slate: { id: 'Slate', value: 'Bridlica', comment: 'Color in our color pallette' },
    SlideOf: { id: 'SlideOf', value: 'Snímka {0} z {1}', comment: 'Slide Text Showing current and total number of slides' },
    SlidesOf: { id: 'SlidesOf', value: 'Snímky {0} a {1} z {2}', comment: 'Slides Text Showing current slides and total number of slides' },
    SliderHandle: { id: 'SliderHandle', value: 'Rukoväť na', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control' },
    SliderMaximumHandle: { id: 'SliderMaximumHandle', value: 'Rukoväť maximálnej hodnoty rozsahu pre', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control' },
    SliderMinimumHandle: { id: 'SliderMinimumHandle', value: 'Rukoväť minimálnej hodnoty rozsahu pre', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control' },
    SkipToMain: { id: 'SkipToMain', value: 'Prejsť na hlavný obsah', comment: 'Skip link in header, jumps when clicked on to main area' },
    Status: { id: 'Status', value: 'Stav', comment: 'Status of someting thats submitted fx in progress, approved' },
    StartsWith: { id: 'StartsWith', value: 'Začína sa s', comment: 'for condition filtering' },
    StepsCompleted: { id: 'StepsCompleted', value: 'Dokončené kroky: {0} z {1}', comment: 'steps of a wizard/chart' },
    StrikeThrough: { id: 'StrikeThrough', value: 'Prečiarknuté', comment: 'turn on and off strike through text in text editor (like word)' },
    SortAtoZ: { id: 'SortAtoZ', value: 'Zoradiť vzostupne', comment: 'Sort A to Z in icons for filtering' },
    SortZtoA: { id: 'SortZtoA', value: 'Zoradiť zostupne', comment: 'Sort Z to A in icons for filtering' },
    SortDown: { id: 'SortDown', value: 'Zoradiť nadol', comment: 'Sort Down tooltip' },
    SortUp: { id: 'SortUp', value: 'Zoradiť nahor', comment: 'Sort Up tooltip' },
    Subscript: { id: 'Subscript', value: 'Dolný index', comment: 'Turn on and off Subscript text in text editor (like word)' },
    Superscript: { id: 'Superscript', value: 'Horný index', comment: 'Turn on and off Superscript text in text editor (like word)' },
    Tabs: { id: 'Tabs', value: 'Karty...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu' },
    Tack: { id: 'Tack', value: 'Pripnúť', comment: 'Pin an object' },
    Tall: { id: 'Tall', value: 'Vysoké', comment: 'Describes a Taller Row Height in a grid/list' },
    Target: { id: 'Target', value: 'Cieľ', comment: 'Label for an input to enter a Target (Url Attribute)' },
    TeamEvent: { id: 'TeamEvent', value: 'Tímová udalosť', comment: 'Having an event with a work team' },
    TestLocaleDefaults: { id: 'TestLocaleDefaults', value: 'Testovať predvolené hodnoty na miestne nastavenie', comment: 'Do not translate' },
    TextColor: { id: 'TextColor', value: 'Farba textu', comment: 'add or edit text color in the editor' },
    TextDropArea: { id: 'DropArea', value: 'Presuňte súbory, ktoré chcete nahrať', comment: 'text for drop area for advanced fileupload' },
    TextDropAreaWithBrowse: { id: 'TextDropAreaWithBrowse', value: 'Presuňte alebo <span class="hyperlink">vyberte súbory</span>, ktoré chcete nahrať', comment: 'text for drop area with browse for advanced fileupload' },
    TextBtnCancel: { id: 'TextBtnCancel', value: 'Zrušiť nahrávanie tohto súboru', comment: 'text for cancel button for advanced fileupload' },
    TextBtnCloseError: { id: 'TextBtnCloseError', value: 'Zavrieť toto chybové hlásenie', comment: 'text for error close button for advanced fileupload' },
    TextBtnRemove: { id: 'TextBtnRemove', value: 'Zavrieť toto chybové hlásenie', comment: 'text for remove button for advanced fileupload' },
    Timer: { id: 'Timer', value: 'Časovač', comment: 'Timer tooltip' },
    To: { id: 'To', value: 'Komu', comment: 'End of a range (of dates)' },
    Today: { id: 'Today', value: 'Dnes', comment: 'refering to today on a calendar' },
    ToggleBold: { id: 'ToggleBold', value: 'Prepnúť text tučným písmom', comment: 'turn on and off bold in text editor (like word)' },
    ToggleH3: { id: 'ToggleH3', value: 'Prepnúť hlavičku 3', comment: 'turn on and off heading 3 text' },
    ToggleH4: { id: 'ToggleH4', value: 'Prepnúť hlavičku 4', comment: 'turn on and off heading 4 text' },
    ToggleItalic: { id: 'ToggleItalic', value: 'Prepnúť text kurzívou', comment: 'turn on and off Italic in text editor (like word)' },
    ToggleUnderline: { id: 'ToggleUnderline', value: 'Prepnúť podčiarknutie textu', comment: 'turn on and off Underline in text editor (like word)' },
    Toolbar: { id: 'Toolbar', value: 'Panel nástrojov', comment: 'describing the toolbar component' },
    TopAlign: { id: 'TopAlign', value: 'Zarovnať nahor', comment: 'Top Align tooltip' },
    Total: { id: 'Total', value: 'Spolu', comment: 'Mathematic total of a calculation' },
    Totals: { id: 'Totals', value: 'Celkom', comment: 'Mathematic total of a calculation (plural)' },
    TreeCollapse: { id: 'TreeCollapse', value: 'Zbaliť strom', comment: 'Tree Collapse tooltip' },
    TreeExpand: { id: 'TreeExpand', value: 'Rozbaliť strom', comment: 'Tree Expand tooltip' },
    Turquoise: { id: 'Turquoise', value: 'Tyrkysová', comment: 'Color in our color pallette' },
    Up: { id: 'Up', value: 'Hore', comment: 'Up tooltip' },
    UpComingEvents: { id: 'UpComingEvent', value: 'Nadchádzajúce udalosti', comment: 'List of upcoming calendar events' },
    UpComingTimeOff: { id: 'UpComingTimeOff', value: 'Nadchádzajúce voľno', comment: 'As in time off work' },
    Upload: { id: 'Upload', value: 'Nahrať', comment: 'Upload tooltip' },
    UnavailableDate: { id: 'UnavailableDate', value: 'Dátum nedostupnosti', comment: 'Unavailable Date Text' },
    Underline: { id: 'Underline', value: 'Podčiarknuť', comment: 'Make text Underlined' },
    Undo: { id: 'Undo', value: 'Zrušiť zmenu', comment: 'Undo tooltip' },
    Unlocked: { id: 'Unlocked', value: 'Odomknuté', comment: 'Unlocked tooltip' },
    UnorderedList: { id: 'UnorderedList', value: 'Vložiť/odstrániť zoznam s odrážkami', comment: 'Insert an Unordered list in the editor' },
    Unsupported: { id: 'Unsupported', value: 'Tento obsah nie je k dispozícii, pretože používa funkcie, ktoré nie sú podporované v aktuálnej verzii vášho prehliadača.', comment: 'Suggesting browser upgrade for missing features.' },
    Url: { id: 'Url', value: 'Adresa URL', comment: 'Url tooltip' },
    UseArrow: { id: 'UseArrow', value: '. Vyberte pomocou klávesov so šípkami.', comment: 'Instructional comments for screen readers' },
    UseEnter: { id: 'UseEnter', value: '. Vyhľadajte pomocou klávesu Enter alebo klávesu so šípkou nadol.', comment: 'Instructional comments for screen readers' },
    User: { id: 'User', value: 'Používateľ', comment: 'User tooltip' },
    UserProfile: { id: 'UserProfile', value: 'Používateľský profil', comment: 'User Profile tooltip' },
    Version: { id: 'Version', value: 'Verzia IDS', comment: 'Version of IDS' },
    VerticalMiddleAlign: { id: 'VerticalMiddleAlign', value: 'Zvisle zarovnať na stred', comment: 'Vertical Align tooltip' },
    ViewSource: { id: 'ViewSource', value: 'Zobraziť zdroj', comment: 'Toggle the source view in the editor' },
    ViewVisual: { id: 'ViewVisual', value: 'Zobraziť vizualizáciu', comment: 'Toggle the visual view in the editor' },
    Week: { id: 'Week', value: 'Týždeň', comment: 'Shows a view of the current weeks events' },
    Year: { id: 'Year', value: 'Rok', comment: 'As in a date year' },
    Yes: { id: 'Yes', value: 'Áno', comment: 'On a dialog button' }
  }
});
