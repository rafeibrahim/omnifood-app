## max-width:

If the container width is larger than the specified max-width then the width
of the element is equal the value that was specified for max-width. However,
if the container width is less than the specified max-width, then the width
of the element will be 100% of the container element width.

## rem

- rem is the root element font size.
- root of the document is the HTML element.

- if we do not define any font size on the (root element) HTML element, then
  1 rem is equal to default browser font size, which is always 16px.

- With 1 rem = 16px it is very difficult to make calculations, we can make
  1 rem equal to 10px for our webpage which will make calculations very easy.

- if we declare font-size (10px) on root element (html element),
  our webpage will no longer respect user defined broswer font size.

- Instead we can declare font-size: 62.5% in root element (html element).
  In this case 1 rem will become 62.5% of 16px (user defined browser font size)
  i.e. 10px for our webpage. But now if the user increase / decrease browser
  font size our webpage will respond by increasing or decreasing the font
  size on our webpage.

  ## use of btn and link (a)

  - link (a) should be used for going somewher on th page or going to some
    other page.

  - btn should be used for actions i.e.
    if something happens that is not related to navigation.
