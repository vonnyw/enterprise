(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define('cultures/en-US', ['jquery'], factory);
    factory();
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function () {

  if (!Locale) {
    return;
  }

  //Get Latest from http://www.unicode.org/Public/cldr/25/
  Locale.addCulture('en-US', {
    //layout/language
    language: 'en',
    englishName: 'English (United States)',
    nativeName: 'English (United States)',
    //layout/orientation/@characters
    direction: 'left-to-right',
    //ca-gregorian
    calendars: [{
      name: 'gregorian',
      //ca-gregorian/main/dates/calendars/gregorian/dateFormats/
      dateFormat: {'separator': '/', //Infered
                   'timeSeparator': ':',
                   'short': 'M/d/yyyy', //use four digit year
                   'medium': 'MMM d, yyyy',
                   'long': 'MMMM d, yyyy',
                   'full': 'EEEE, MMMM d, y',
                   'month': 'MMMM d',
                   'year': 'MMMM yyyy',
                   'timestamp': 'h:mm:ss a',
                   'datetime': 'M/d/yyyy h:mm a'}, //Infered short + short gregorian/dateTimeFormats
      //ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
      days: {
         wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
         abbreviated: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
         narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
      },
      //ca-gregorian/main/dates/calendars/gregorian/months/format/wide
      months: {
        wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      //ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
      timeFormat: 'h:mm a',
      //ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
      dayPeriods: ['AM', 'PM']
    }],

    //numbers/currencyFormats-numberSystem-latn/standard (Replace Sign http://www.currencysymbols.in ?)
    currencySign: '$', //(Replace Sign http://www.currencysymbols.in ?)
    currencyFormat: '¤#,##0.00',
    //numbers/symbols-numberSystem-latn
    numbers: {
      percentSign: '%',
      percentFormat: '#,##0 %',
      minusSign: '-',
      decimal: '.',
      group: ','
    },
    //Resx - Approved By Translation Team
    messages: {
      'AboutText': {id: 'AboutText', value: 'Copyright &copy; {0} Infor. All rights reserved. The word and design marks set forth herein are trademarks and/or registered trademarks of Infor and/or its affiliates and subsidiaries. All rights reserved. All other trademarks listed herein are the property of their respective owners'},
      'Actions': {id: 'Actions', value: 'Actions', comment: 'Tooltip text for the action button with additional in context actions'},
      'AdditionalItems': {id: 'AdditionalItems', value: 'Additional Items', comment: 'Title used in swaplist'},
      'Add': {id: 'Add', value: 'Add', comment: 'Add'},
      'AddNewTab': {id: 'AddNewTab', value: 'Add New Tab', comment: 'Attached to a button that adds new tabs'},
      'AdvancedFilter': {id: 'AdvancedFilter', value: 'Create Advanced Filter', comment: 'In a data grid active an advanced filtering feature'},
      'Alert': {id: 'Alert', value: 'Alert', comment: 'Alert'},
      'AlertOnPage': {id: 'AlertOnPage', value: 'Alert message(s) on page', comment: 'Alert message(s) on page n'},
      'All': {id: 'All', value: 'All', comment: 'All items in the context of a filter'},
      'AllResults': {id: 'AllResults', value: 'All Results For', comment: 'Search Results Text'},
      'AligntoBottom': {id: 'AligntoBottom', value: 'Align Bottom', comment: 'Align to Bottom tooltip'},
      'AlignCenterHorizontally': {id: 'AlignCenterHorizontally', value: 'Horizontal Align Center', comment: 'Align Center Horizontally tooltip'},
      'Amber': {id: 'Amber', value: 'Amber', comment: 'Color in our color pallette'},
      'Amethyst': {id: 'Amethyst', value: 'Amethyst', comment: 'Color in our color pallette'},
      'Apply': {id: 'Apply', value: 'Apply', comment: 'Text in a button to apply an action'},
      'Attach': {id: 'Attach', value: 'Attach', comment: 'Attach'},
      'Available': {id: 'Available', value: 'Available', comment: 'Title used in swaplist'},
      'Azure': {id: 'Azure', value: 'Azure', comment: 'Color in our color pallette'},
      'BackgroundColor': {id: 'BackgroundColor', value: 'Background color', comment: 'add or edit text background color in the editor'},
      'Between': {id: 'Between', value: 'Between', comment: 'Between in icons for filtering'},
      'Blockquote': {id: 'Blockquote', value: 'Block quote', comment: 'insert a block quote in the editor'},
      'Bold': {id: 'Bold', value: 'Bold', comment: 'Make text Bold'},
      'Bookmarked': {id: 'Bookmarked', value: 'Bookmarked', comment: 'Bookmark filled - Element is already bookmarked'},
      'BookmarkThis': {id: 'BookmarkThis', value: 'Bookmark this', comment: 'Bookmark an element'},
      'Breadcrumb': {id: 'Breadcrumb', value: 'Breadcrumb', comment: 'Text describing the Breadcrumb'},
      'Browser': {id: 'Browser', value: 'Browser', comment: 'As in a Web Browser'},
      'BulletedList': {id: 'BulletedList', value: 'Bulleted list', comment: 'Bulleted List tooltip'},
      'Calendar': {id: 'Calendar', value: 'Calendar', comment: 'Inline Text for the title of the Calendar control'},
      'Camera': {id: 'Camera', value: 'Camera', comment: 'Camera tooltip'},
      'Cancel': {id: 'Cancel', value: 'Cancel', comment: 'Cancel tooltip'},
      'CapsLockOn': {id: 'CapsLockOn', value: 'Caps Lock On', comment: 'Caps Lock On message'},
      'Cart': {id: 'Cart', value: 'Cart', comment: 'Cart tooltip'},
      'CenterText': {id: 'CenterText', value: 'Center', comment: 'An Icon Tooltip'},
      'CharactersLeft': {id: 'CharactersLeft', value: 'Characters left {0}', comment: 'indicator showing how many more characters you can type.'},
      'CharactersMax': {id: 'CharactersMax', value: 'Character count maximum of ', comment: 'indicator showing how many max characters you can type.'},
      'ChangeSelection': {id: 'ChangeSelection', value: '. To change the selection use the arrow keys.', comment: 'Audible Text for drop down list help'},
      'Checkbox': {id: 'Checkbox', value: 'Checkbox', comment: 'Checkbox tooltip'},
      'Checked': {id: 'Checked', value: 'Checked', comment: 'Checked tooltip'},
      'Clear': {id: 'Clear', value: 'Clear', comment: 'Tooltip for a Clear Action'},
      'ClearFilter': {id: 'ClearFilter', value: 'Clear Filter', comment: 'Clear the current filter criteria'},
      'ClearSelection': {id: 'ClearSelection', value: '(Clear Selection)', comment: 'clear dropdown selection'},
      'Clock': {id: 'Clock', value: 'Clock', comment: 'Clock tooltip'},
      'Close': {id: 'Close', value: 'Close', comment: 'Tooltip for a Close Button Action'},
      'Clickable': {id: 'Clickable', value: 'Clickable in editor', comment: 'Clickable in editor'},
      'Copy': {id: 'Copy', value: 'Copy', comment: 'Copy tooltip'},
      'Collapse': {id: 'Collapse', value: 'Collapse', comment: 'Collapse / close a tree/submenu'},
      'CollapseAppTray': {id: 'CollapseAppTray', value: 'Collapse App Tray', comment: 'Collapse App Tray tooltip'},
      'Columns': {id: 'Columns', value: 'Columns', comment: 'Columns tooltip'},
      'Component': {id: 'Component', value: 'Component', comment: 'As in a UI component - building block.'},
      'Compose': {id: 'Compose', value: 'Compose', comment: 'Compose tooltip'},
      'Completed': {id: 'Completed', value: 'Completed', comment: 'Text For a Completed Status'},
      'Confirm': {id: 'Confirm', value: 'Confirm', comment: 'Confirm tooltip'},
      'ConfirmOnPage': {id: 'ConfirmOnPage', value: 'Confirm message(s) on page', comment: 'Confirm message(s) on page n'},
      'CookiesEnabled': {id: 'CookiesEnabled', value: 'Cookies Enabled', comment: 'Returns if browser cookies are enabled or not.'},
      'Contains': {id: 'Contains', value: 'Contains', comment: 'Contains in icons for filtering'},
      'CssClass': {id: 'CssClass', value: 'Css Class', comment: 'Label for entering a Css Class name'},
      'Cut': {id: 'Cut', value: 'Cut', comment: 'Cut tooltip'},
      'Date': {id: 'Date', value: 'Date', comment: 'Describes filtering by a date data type'},
      'Delete': {id: 'Delete', value: 'Delete', comment: 'Delete Toolbar Action Tooltip'},
      'DistributeHoriz': {id: 'DistributeHoriz', value: 'Distribute Horizontally', comment: 'Icon button tooltip for action that distributes elements across Horizontally'},
      'Document': {id: 'Document', value: 'Document', comment: 'Document tooltip'},
      'Dirty': {id: 'Dirty', value: 'Row has changed', comment: 'Record is dirty / modified'},
      'Drilldown': {id: 'Drilldown', value: 'Drill down', comment: 'Drill by moving page flow into a record'},
      'Drillup': {id: 'Drillup', value: 'Drill Up', comment: 'Opposite of Drilldown, move back up to a larger set of records'},
      'Dropdown': {id: 'Dropdown', value: 'Dropdown', comment: 'Dropdown'},
      'DoesNotContain': {id: 'DoesNotContain', value: 'Does Not Contain', comment: 'Does Not Contain in icons for filtering'},
      'DoesNotEndWith': {id: 'DoesNotEndWith', value: 'Does Not End With', comment: 'For condition filtering'},
      'DoesNotEqual': {id: 'DoesNotEqual', value: 'Does Not Equal', comment: 'Does Not Equal in icons for filtering'},
      'DoesNotStartWith': {id: 'DoesNotStartWith', value: 'Does Not Start With', comment: 'For condition filtering'},
      'Down': {id: 'Down', value: 'Down', comment: 'Down tooltip'},
      'Download': {id: 'Download', value: 'Download', comment: 'Download tooltip'},
      'Duplicate': {id: 'Duplicate', value: 'Duplicate', comment: 'Duplicate tooltip'},
      'EitherSelectedOrNotSelected': {id: 'EitherSelectedOrNotSelected', value: 'Either Selected Or Not Selected', comment: 'Either Selected Or NotSelected in icons for filtering'},
      'EndsWith': {id: 'EndsWith', value: 'Ends With', comment: 'for condition filtering'},
      'EnterComments': {id: 'EnterComments', value: 'Enter comments here...', comment: 'Placeholder text for a text input (comments)'},
      'Error': {id: 'Error', value: 'Error', comment: 'Title, Spoken Text describing fact an error has occured'},
      'ErrorAllowedTypes': {id: 'ErrorAllowedTypes', value: 'File type is not allowed', comment: 'Error string for file-upload'},
      'ErrorMaxFileSize': {id: 'ErrorMaxFileSize', value: 'Exceeded file size limit', comment: 'Error string for file-upload'},
      'ErrorMaxFilesInProcess': {id: 'ErrorMaxFilesInProcess', value: 'Exceeded maximum files allowed limit', comment: 'Error string for file-upload'},
      'ErrorOnPage': {id: 'ErrorOnPage', value: 'Error message(s) on page', comment: 'Error message(s) on page n'},
      'EmailValidation': {id: 'EmailValidation', value: 'Email address not valid', comment: 'This the rule for email validation'},
      'Emerald': {id: 'Emerald', value: 'Emerald', comment: 'Color in our color pallette'},
      'Expand': {id: 'Expand', value: 'Expand', comment: 'Expand open a tree/submenu'},
      'ExpandAppTray': {id: 'ExpandAppTray', value: 'Expand App Tray', comment: 'ExpandAppTray tooltip'},
      'ExpandCollapse': {id: 'ExpandCollapse', value: 'Expand / Collapse', comment: 'Text to toggle a button in a container.'},
      'ExportAsSpreadsheet': {id: 'ExportAsSpreadsheet', value: 'Export as Spreadsheet', comment: 'Export as Spreadsheet tooltip'},
      'Edit': {id: 'Edit', value: 'Edit', comment: 'Edit tooltip'},
      'Equals': {id: 'Equals', value: 'Equals', comment: 'Equals in icons for filtering'},
      'ExitFullView': {id: 'ExitFullView', value: 'Exit Full View', comment: 'Exit Full View tooltip'},
      'Export': {id: 'Export', value: 'Export', comment: 'Export tooltip'},
      'ExportToExcel': {id: 'ExportToExcel', value: 'Export To Excel', comment: 'Export To Excel menu option in datagrid'},
      'Favorite': {id: 'Favorite', value: 'Favorite', comment: 'A favorite item'},
      'FileUpload': {id: 'FileUpload', value: 'File Upload. Press Enter to Browse for a file', comment: 'Screen Reader instructions'},
      'Filter': {id: 'Filter', value: 'Filter', comment: 'Filter tooltip'},
      'FirstPage': {id: 'FirstPage', value: 'First Page', comment: 'First Page tooltip'},
      'Folder': {id: 'Folder', value: 'Folder', comment: 'Folder tooltip'},
      'FullView': {id: 'FullView', value: 'Full View', comment: 'Full View tooltip'},
      'GoForward': {id: 'GoForward', value: 'Go Forward', comment: 'Move Page / object this direction'},
      'GoBack': {id: 'GoBack', value: 'Go Back', comment: 'Move Page / object this directionp'},
      'GoDown': {id: 'GoDown', value: 'Go Down', comment: 'Move Page / object this directionp'},
      'GoUp': {id: 'GoUp', value: 'Go Up', comment: 'Move Page / object this direction'},
      'Go': {id: 'Go', 'value': 'Go', comment: 'Go, perform a movement, start a search, move to the next "thing" in a workflow.'},
      'Graphite': {id: 'Graphite', value: 'Graphite', comment: 'Color in our color pallette'},
      'GreaterOrEquals': {id: 'GreaterOrEquals', value: 'Greater Than Or Equals', comment: 'Greater Than Or Equals in icons for filtering'},
      'GreaterThan': {id: 'GreaterThan', value: 'Greater Than', comment: 'Greater Than in icons for filtering'},
      'Grid': {id: 'Grid', value: 'Grid', comment: 'Grid tooltip'},
      'Hours': {id: 'Hours', value: 'Hours', comment: 'the hour portion of a time'},
      'HeadingThree': {id: 'HeadingThree', value: 'Heading Three', comment: 'Heading Three tooltip'},
      'HeadingFour': {id: 'HeadingFour', value: 'Heading Four', comment: 'Heading Four tooltip'},
      'Highest': {id: 'Highest', value: 'Highest', comment: 'Highest Four tooltip'},
      'Home': {id: 'Home', value: 'Home', comment: 'Home tooltip'},
      'HtmlView': {id: 'HtmlView', value: 'Html View', comment: 'Html View tooltip'},
      'Image': {id: 'Image', value: 'Image', comment: 'Image of something'},
      'Import': {id: 'Import', value: 'Import', comment: 'Import tooltip'},
      'Info': {id: 'Info', value: 'Info', comment: 'Info tooltip'},
    'InfoOnPage': {id: 'InfoOnPage', value: 'Information message(s) on page', comment: 'Information message(s) on page n'},
      'InProgress': {id: 'In Progress', value: 'In Progress', comment: 'Info tooltip that an action is in progress'},
      'Insert': {id: 'Insert', value: 'Insert', comment: 'Insert Modal Dialog Button'},
      'InsertAnchor': {id: 'InsertAnchor', value: 'Insert Anchor', comment: 'Insert Acnhor (link) in an editor'},
      'InsertImage': {id: 'InsertImage', value: 'Insert Image', comment: 'Insert Image in an editor'},
      'InsertLink': {id: 'InsertLink', value: 'Insert Link', comment: 'Insert Link in an editor'},
      'InsertUrl': {id: 'InsertUrl', value: 'Insert Url', comment: 'Insert a Url in an editor'},
      'Italic': {id: 'Italic', value: 'Italic', comment: 'Make Text Italic'},
      'InvalidDate': {id: 'InvalidDate', value: 'Invalid Date', comment: 'validation message for wrong date format (short)'},
      'InvalidTime': {id: 'InvalidTime', value: 'Invalid Time', comment: 'validation message for wrong time format'},
      'Inventory': {id: 'Inventory', value: 'Inventory', comment: 'Icon button tooltop for Inventory Action'},
      'IsEmpty': {id: 'IsEmpty', value: 'Is Empty', comment: 'Is Empty in icons for filtering'},
      'IsNotEmpty': {id: 'IsNotEmpty', value: 'Is Not Empty', comment: 'Is Not Empty in icons for filtering'},
      'ItemsSelected': {id: 'ItemsSelected', value: 'Items selected', comment: 'Num of Items selected for swaplist'},
      'JustifyCenter': {id: 'JustifyCenter', value: 'Center', comment: 'justify text to center in the editor'},
      'JustifyLeft': {id: 'JustifyLeft', value: 'Align Left', comment: 'justify text to left in the editor'},
      'JustifyRight': {id: 'JustifyRight', value: 'Align Right', comment: 'justify text to right in the editor'},
      'Keyword': {id: 'Keyword', value: 'Keyword', comment: 'Describes filtering by a keyword search'},
      'Launch': {id: 'Launch', value: 'Launch', comment: 'Launch'},
      'LastPage': {id: 'LastPage', value: 'Last Page', comment: 'Last Page tooltip'},
      'Left': {id: 'Left', value: 'Left', comment: 'Left tooltip'},
      'LessOrEquals': {id: 'LessOrEquals', value: 'Less Than Or Equals', comment: 'Less Than Or Equals in icons for filtering'},
      'LessThan': {id: 'LessThan', value: 'Less Than', comment: 'Less Than in icons for filtering'},
      'Link': {id: 'Link', value: 'Link', comment: 'Link - as in hyperlink - icon tooltop'},
      'Load': {id: 'Load', value: 'Load', comment: 'Load icon tooltip'},
      'Loading': {id: 'Loading', value: 'Loading', comment: 'Text below spinning indicator to indicate loading'},
      'Locale': {id: 'Locale', value: 'Locale', comment: 'The users locale string for example en-US, it-It'},
      'Locked': {id: 'Locked', value: 'Locked', comment: 'Locked tooltip'},
      'Logout': {id: 'Logout', value: 'Log Out', comment: 'Log out of the application'},
      'Lookup': {id: 'Lookup', value: 'Lookup', comment: 'Lookup - As in looking up a record or value'},
      'Lowest': {id: 'Lowest', value: 'Lowest', comment: 'Lowest - As in Lowest value'},
      'Mail': {id: 'Mail', value: 'Mail', comment: 'Mail tooltip'},
      'MapPin': {id: 'MapPin', value: 'Pin', comment: 'Map Pin tooltip'},
      'Maximize': {id: 'Maximize', value: 'Maximize', comment: 'Maximize a screen or dialog in the UI'},
      'Median': {id: 'Median', value: 'Median', comment: 'Median in Mathematics'},
      'Medium': {id: 'Medium', value: 'Medium', comment: 'Describes a Medium sized Row Height in a grid/list'},
      'Menu': {id: 'Menu', value: 'Menu', comment: 'Menu tooltip'},
      'MingleShare': {id: 'MingleShare', value: 'Share with Ming.le', comment: 'Share the contextual object/action in the mingle system'},
      'Minutes': {id: 'Minutes', value: 'Minutes', comment: 'the minutes portion of a time'},
      'Minimize': {id: 'Minimize', value: 'Minimize', comment: 'Minimize tooltip'},
      'Minus': {id: 'Minus', value: 'Minus', comment: 'Minus tooltip'},
      'Mobile': {id: 'Mobile', value: 'Mobile', comment: 'Indicates a mobile device (phone tablet ect)'},
      'Month': {id: 'Month', value: 'Month', comment: 'As in a date month'},
      'More': {id: 'More', value: 'More...', comment: 'Text Indicating More Buttons or form content'},
      'MoreActions': {id: 'MoreActions', value: 'More Actions', comment: 'Text on the More Actions button indictating hidden functions'},
      'MoveToLeft': {id: 'MoveToLeft', value: 'Move to left', comment: 'Title use in swaplist'},
      'MoveToRight': {id: 'MoveToRight', value: 'Move to right', comment: 'Title use in swaplist'},
      'MsgDirty': {id: 'MsgDirty', value: ', Modified', comment: 'for modified form fields'},
      'NewDocument': {id: 'NewDocument', value: 'New Document', comment: 'New Document tooltip'},
      'NewItem': {id: 'NewItem', value: 'New item', comment: 'New item in listbuilder'},
      'Next': {id: 'Next', value: 'Next', comment: 'Next in icons tooltip'},
      'NextPage': {id: 'NextPage', value: 'Next Page', comment: 'Next on Pager'},
      'NextMonth': {id: 'NextMonth', value: 'Next Month', comment: 'the label for the button that moves calendar to next/prev'},
      'No': {id: 'No', value: 'No', comment: 'On a dialog button'},
      'NoResults': {id: 'NoResults', value: 'No Results', comment: 'Search Results Text'},
      'Normal': {id: 'Normal', value: 'Normal', comment: 'Normal row height'},
      'Notes': {id: 'Notes', value: 'Notes', comment: 'Notes icon tooltip'},
      'NotSelected': {id: 'NotSelected', value: 'Not Selected', comment: 'Not Selected in icons for filtering'},
      'NumberList': {id: 'NumberList', value: 'Number List', comment: 'Number List tooltip'},
      'Ok': {id: 'Ok', value: 'Ok', comment: 'Ok button on a dialog'},
      'OpenBackClose': {id: 'OpenBackClose', value: 'Open / Back / Close', comment: 'Open / Back / Close tooltip'},
      'OpenClose': {id: 'OpenClose', value: 'Open / Close', comment: 'Open / Close tooltip'},
      'OrderedList': {id: 'OrderedList', value: 'Insert/Remove Numbered List', comment: 'Insert an Ordered list in the editor'},
      'Page': {id: 'Page', value: 'page ', comment: 'Text on the pager links'},
      'PageOf': {id: 'PageOf', value: 'Page {0} of {1}', comment: 'Pager Text Showing current and number of pages'},
      'PageOn': {id: 'PageOn', value: 'You are currently on page ', comment: 'Text on the pager links'},
      'Paste': {id: 'Paste', value: 'Paste', comment: 'Paste icon tooltip'},
      'PasswordValidation': {id: 'PasswordValidation', value: '<strong>Password must</strong><br>Be at least 10 characters long<br>Have at least one upper case character<br>Have at least one lower case character<br>Contain one special character<br>Not contain your username<br>Can not be a Previously used password<br>', comment: 'Password validation requirements'},
      'PasswordConfirmValidation': {id: 'PasswordConfirmValidation', value: 'Password must match', comment: 'Password Confirm validation'},
      'Peak': {id: 'Peak', value: 'Peak', comment: 'the max or peak value in a chart'},
      'PersonalizeColumns': {id: 'PersonalizeColumns', value: 'Personalize Columns', comment: 'Customize Columns in a Grid'},
      'Platform': {id: 'Platform', value: 'Platform', comment: 'The users operating system i.e. mac, windows'},
      'Period': {id: 'Period', value: 'Period', comment: 'the am/pm portion of a time'},
      'PressDown': {id: 'PressDown', value: 'Press Down arrow to select a date', comment: 'the audible label for Tooltip about how to operate the date picker'},
      'PressShiftF10': {id: 'PressShiftF10', value: 'Press Shift+F10 to open the context menu.', comment: 'the audible infor for screen readers on how to use a field with a popup menu'},
      'Previous': {id: 'Previous', value: 'Previous', comment: 'Previous icon tooltip - moved to previous record'},
      'PreviousMonth': {id: 'PreviousMonth', value: 'Previous Month', comment: 'the label for the button that moves calendar to next/prev'},
      'PreviousPage': {id: 'PreviousPage', value: 'Previous Page', comment: 'Previous Page tooltip'},
      'Print': {id: 'Print', value: 'Print', comment: 'Print tooltip'},
      'Range': {id: 'Range', value: 'Range', comment: 'Range for tooltip'},
      'RecordsPerPage': {id: 'RecordsPerPage', value: '{0} Records per page', comment: 'Dropdown allows the user to select how many visible records {} shows select value.'},
      'Redo': {id: 'Redo', value: 'Redo', comment: 'Redo tooltip'},
      'ReorderRows': {id: 'ReorderRows', value: 'Reorder Rows', comment: 'Drag and Reorder Grid Rows'},
      'Refresh': {id: 'Refresh', value: 'Refresh', comment: 'Refresh tooltip'},
      'Required': {id: 'Required', value: 'Required', comment: 'indicates a form field is manditory'},
      'Reset': {id: 'Reset', value: 'Reset', comment: 'Reset tooltip'},
      'ResetDefault': {id: 'ResetDefault', value: 'Reset to Default', comment: 'Reset Datagrid Columns, Filter and other Layout'},
      'Result': {id: 'Result', value: 'Result', comment: 'Showing a single result in a List'},
      'Results': {id: 'Results', value: 'Results', comment: 'As in showing N Results (plural) in a List'},
      'RightAlign': {id: 'RightAlign', value: 'Align Right', comment: 'Right Align tooltip'},
      'RightAlignText': {id: 'RightAlignText', value: 'Align Right', comment: 'Right Align Text tooltip'},
      'Right': {id: 'Right', value: 'Right', comment: 'Right'},
      'Roles': {id: 'Roles', value: 'Roles', comment: 'Roles tooltip'},
      'RowHeight': {id: 'RowHeight', value: 'Row Height', comment: 'Describes the Height for Rows in a Data Grid'},
      'Ruby': {id: 'Ruby', value: 'Ruby', comment: 'Color in our color pallette'},
      'RunFilter': {id: 'RunFilter', value: 'Run Filter', comment: 'Execute the current filter criteria'},
      'Save': {id: 'Save', value: 'Save', comment: 'Save tooltip'},
      'SaveCurrentView': {id: 'SaveCurrentView', value: 'Save Current View', comment: 'Datagrids contain view sets. This menu option saves them'},
      'SavedViews': {id: 'SavedViews', value: 'Saved Views', comment: 'Label for a list of Views'},
      'Seconds': {id: 'Seconds', value: 'Seconds', comment: 'the seconds portion of a time'},
      'Search': {id: 'Search', value: 'Search', comment: 'Search tooltip'},
      'SearchColumnName': {id: 'SearchColumnName', value: 'Search for a column name', comment: 'Search for a datagrid column by name'},
      'SearchFolder': {id: 'SearchFolder', value: 'Search in Folder', comment: 'Search Folder tooltip'},
      'SearchList': {id: 'SearchList', value: 'Search List', comment: 'Search List tooltip'},
      'Select': {id: 'Select', value: 'Select', comment: 'text describing a select action'},
      'Selected': {id: 'Selected', value: 'Selected', comment: 'text describing a selected object'},
      'SelectAll': {id: 'SelectAll', value: 'Select All', comment: 'describes the action of selecting all items available in a list'},
      'Send': {id: 'Send', value: 'Send', comment: 'Send tooltip'},
      'SetTime': {id: 'SetTime', value: 'Set Time', comment: 'button text that inserts time when clicked'},
      'Settings': {id: 'Settings', value: 'Settings', comment: 'Settings tooltip'},
      'Short': {id: 'Short', value: 'Short', comment: 'Describes a Shorted Row Height in a grid/list'},
      'ShowFilterRow': {id: 'ShowFilterRow', value: 'Show Filter Row', comment: 'Toggle a row with filer info above a list'},
      'ShowLess': {id: 'ShowLess', value: 'Show Less', comment: 'Show less form content'},
      'ShowMore': {id: 'ShowMore', value: 'Show More', comment: 'Show more form content'},
      'Slate': {id: 'Slate', value: 'Slate', comment: 'Color in our color pallette'},
      'SlideOf': {id: 'SlideOf', value: 'Slide {0} of {1}', comment: 'Slide Text Showing current and total number of slides'},
      'SlidesOf': {id: 'SlidesOf', value: 'Slides {0} and {1} of {2}', comment: 'Slides Text Showing current slides and total number of slides'},
      'SliderHandle': {id: 'SliderHandle', value: 'Handle for', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control'},
      'SliderMaximumHandle': {id: 'SliderMaximumHandle', value: 'Maximum range handle for', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control'},
      'SliderMinimumHandle': {id: 'SliderMinimumHandle', value: 'Minimum range handle for', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control'},
      'SkipToMain': {id: 'SkipToMain', value: 'Skip to Main Content', comment: 'Skip link in header, jumps when clicked on to main area'},
      'StartsWith': {id: 'StartsWith', value: 'Starts With', comment: 'for condition filtering'},
      'StrikeThrough': {id: 'StrikeThrough', value: 'Strike Through', comment: 'turn on and off strike through text in text editor (like word)'},
      'SortAtoZ': {id: 'SortAtoZ', value: 'Sort Ascending', comment: 'Sort A to Z in icons for filtering'},
      'SortZtoA': {id: 'SortZtoA', value: 'Sort Descending', comment: 'Sort Z to A in icons for filtering'},
      'SortDown': {id: 'SortDown', value: 'Sort Down', comment: 'Sort Down tooltip'},
      'SortUp': {id: 'SortUp', value: 'Sort Up', comment: 'Sort Up tooltip'},
      'Subscript': {id: 'Subscript', value: 'Subscript', comment: 'Turn on and off Subscript text in text editor (like word)'},
      'Superscript': {id: 'Superscript', value: 'Superscript', comment: 'Turn on and off Superscript text in text editor (like word)'},
      'Tabs': {id: 'Tabs', value: 'Tabs...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu'},
      'Tack': {id: 'Tack', value: 'Pin', comment: 'Pin an object'},
      'Tall': {id: 'Tall', value: 'Tall', comment: 'Describes a Taller Row Height in a grid/list'},
      'Target': {id: 'Target', value: 'Target', comment: 'Label for an input to enter a Target (Url Attribute)'},
      'TestLocaleDefaults': {id: 'TestLocaleDefaults', value: 'Test Locale Defaults', comment: 'Do not translate'},
      'TextColor': {id: 'TextColor', value: 'Text color', comment: 'add or edit text color in the editor'},
      'TextDropArea': {id: 'DropArea', value: 'Drag and Drop Files to Upload', comment: 'text for drop area for advanced fileupload'},
      'TextDropAreaWithBrowse': {id: 'TextDropAreaWithBrowse', value: 'Drag and Drop or <span class="hyperlink">Select Files</span> to Upload', comment: 'text for drop area with browse for advanced fileupload'},
      'TextBtnCancel': {id: 'TextBtnCancel', value: 'Cancel uploading this file', comment: 'text for cancel button for advanced fileupload'},
      'TextBtnCloseError': {id: 'TextBtnCloseError', value: 'Close this error', comment: 'text for error close button for advanced fileupload'},
      'TextBtnRemove': {id: 'TextBtnRemove', value: 'Close this error', comment: 'text for remove button for advanced fileupload'},
      'Timer': {id: 'Timer', value: 'Timer', comment: 'Timer tooltip'},
      'Today': {id: 'Today', value: 'Today', comment: 'refering to today on a calendar'},
      'ToggleBold': {id: 'ToggleBold', value: 'Toggle Bold Text', comment: 'turn on and off bold in text editor (like word)'},
      'ToggleH3': {id: 'ToggleH3', value: 'Toggle Heading 3', comment: 'turn on and off heading 3 text'},
      'ToggleH4': {id: 'ToggleH4', value: 'Toggle Heading 4', comment: 'turn on and off heading 4 text'},
      'ToggleItalic': {id: 'ToggleItalic', value: 'Toggle Italic Text', comment: 'turn on and off Italic in text editor (like word)'},
      'ToggleUnderline': {id: 'ToggleUnderline', value: 'Toggle Underline Text', comment: 'turn on and off Underline in text editor (like word)'},
      'Toolbar': {id: 'Toolbar', value: 'Toolbar', comment: 'describing the toolbar component'},
      'TopAlign': {id: 'TopAlign', value: 'Top Align', comment: 'Top Align tooltip'},
      'Total': {id: 'Total', value: 'Total', comment: 'Mathematic total of a calculation'},
      'Totals': {id: 'Totals', value: 'Totals', comment: 'Mathematic total of a calculation (plural)'},
      'TreeCollapse': {id: 'TreeCollapse', value: 'Collapse Tree', comment: 'Tree Collapse tooltip'},
      'TreeExpand': {id: 'TreeExpand', value: 'Expand Tree', comment: 'Tree Expand tooltip'},
      'Turquoise': {id: 'Turquoise', value: 'Turquoise', comment: 'Color in our color pallette'},
      'Up': {id: 'Up', value: 'Up', comment: 'Up tooltip'},
      'Upload': {id: 'Upload', value: 'Upload', comment: 'Upload tooltip'},
      'UnavailableDate': {id: 'UnavailableDate', value: 'Unavailable Date', comment: 'Unavailable Date Text'},
      'Underline': {id: 'Underline', value: 'Underline', comment: 'Make text Underlined'},
      'Undo': {id: 'Undo', value: 'Undo', comment: 'Undo tooltip'},
      'Unlocked': {id: 'Unlocked', value: 'Unlocked', comment: 'Unlocked tooltip'},
      'UnorderedList': {id: 'UnorderedList', value: 'Insert/Remove Bulleted List', comment: 'Insert an Unordered list in the editor'},
      'Unsupported': {id: 'Unsupported', value: 'This content is not available because it uses features not supported in your current browser version.', comment: 'Suggesting browser upgrade for missing features.'},
      'Url': {id: 'Url', value: 'Url', comment: 'Url tooltip'},
      'UseArrow': {id: 'UseArrow', value: '. Use arrow keys to select.', comment: 'Instructional comments for screen readers'},
      'UseEnter': {id: 'UseEnter', value: '. Use enter or down arrow to lookup.', comment: 'Instructional comments for screen readers'},
      'User': {id: 'User', value: 'User', comment: 'User tooltip'},
      'UserProfile': {id: 'UserProfile', value: 'User Profile', comment: 'User Profile tooltip'},
      'VerticalMiddleAlign': {id: 'VerticalMiddleAlign', value: 'Vertical Align Center', comment: 'Vertical Align tooltip'},
      'ViewSource': {id: 'ViewSource', value: 'View Source', comment: 'Toggle the source view in the editor'},
      'ViewVisual': {id: 'ViewVisual', value: 'View Visual', comment: 'Toggle the visual view in the editor'},
      'Year': {id: 'Year', value: 'Year', comment: 'As in a date year'},
      'Yes': {id: 'Yes', value: 'Yes', comment: 'On a dialog button'}
    }
  });
}));
