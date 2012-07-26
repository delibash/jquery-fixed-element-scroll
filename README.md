What does it do?
================

If an image needs to stick to the bottom of the page, you would just use position=fixed, right?
But what if it needs to stick to the bottom of the page but stays inside its parent.
In other words, if I scroll past its parent, the picture need to stick to the bottom of the parent (i.e. position: absolute, bottom: 0),
and if I scroll on the top of the page, the image need to stay on the top of its parent (i.e. position: static)

Add the js files in your HTML's head: 
=====================================

    <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.min.js"></script>
    <script src="/fixedElemScroll.jquery.js" type="text/javascript"></script>

The basic syntax to add a module is the following:
==================================================

    $("img.need_to_scroll_inside_its_container").fixedElemScroll()

Options with default:
=====================

    // if you want to specify what is the parent
    $parent:  $this.parent()
    // if the parent's element position is static, bottom will be the difference between the bottom of the parent element
    // and the bottom of the closest parent element with a position not equal "static"
    bottom: 0

Tested on IE7+, FF 3.6+, Chrome, Safari