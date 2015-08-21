---
layout: post
title:  "Add Ellipsis to a Webpage with only CSS"
date:   2015-09-21 00:17:28
categories: life
---
Often times I find ways to overcomplicate simple tasks. One of these task that has stumped me in the past was adding ellipsis to a line of text and adding ellipsis in its place.

I used to figure out a random max character length that would always fit on one line then substract 3 characters to replace with the ellipsis. This requires a bunch of javascript with all sorts of random number limits.

Turns out, it is a simple fix but is extremely powerful!

CSS has a property called `text-overflow` that has three unique values: clip, ellipsis, and string. We are going to end up using `ellipsis`.

If we have a set up of:

    <div style="width:50%">
        <p>Bacon ipsum dolor amet pork belly tri-tip leberkas porchetta ham drumstick andouille, meatball bresaola turkey venison beef pig frankfurter ground round</p>
    </div>

Our css needs to include three properties for the `<p>`.

`overflow: hidden` - Hides any elements that don't fit within the div

`white-space: nowrap` - prevents the text from wrapping to the next line

`text-overflow: ellipsis` - adds the ellipsis

So our final css looks like this:

    p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

The end result should be ellipsis on a line at any dimension you stretch the screen, always in the right location.

If you are still confused, go and play around with [this jsfiddle](https://jsfiddle.net/63bmsreq/) I made.
