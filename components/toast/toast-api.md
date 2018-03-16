<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [Toast][1]
    -   [updated][2]
    -   [destroy][3]

## Toast

Toast Component.  This component produces small, temporary messages in
 one of the application's corners.

**Parameters**

-   `element` **[HTMLElement][4]** the target location for the Toast message
-   `settings` **[object][5]?** incoming settings
    -   `settings.title` **[string][6]** Text that is displayed in the Toast's title. (optional, default `'(Title)'`)
    -   `settings.message` **[string][6]** Text/HTML that's displayed in the Toast's body. (optional, default `'(Content)'`)
    -   `settings.position` **[string][6]** text that propagates into CSS classes that position the Toast in specific places
        Can be top left, bottom left, bottom rightx (optional, default `'top right'`)
    -   `settings.audibleOnly` **[boolean][7]** if true, causes the toast to be invisble on the screen, but still read out lout by screen readers. (optional, default `false`)
    -   `settings.progressBar` **[boolean][7]** causes the toast to have a visible progress bar that will be completely
        disappeared when the toast should be removed. (optional, default `true`)
    -   `settings.timeout` **[number][8]** the amount of time the toast should be present on-screen. (optional, default `6000`)

### updated

**Parameters**

-   `settings` **[object][5]?** incoming settings

Returns **void** 

### destroy

Teardown

Returns **void** 

[1]: #toast

[2]: #updated

[3]: #destroy

[4]: https://developer.mozilla.org/docs/Web/HTML/Element

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[6]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[7]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[8]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number