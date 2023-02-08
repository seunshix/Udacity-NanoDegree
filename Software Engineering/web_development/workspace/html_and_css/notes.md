This is a way to write html code and design with CSS but doesn't use the full functionality of CSS


<!DOCTYPE html>

<html>

<head>
    <title>Page Title</title>
<style>
.myDiv {
    border: 5px outset red;
    background-color: lightblue;    
    text-align: center;
    }
</style>
</head>

<body style = 'margin-left: 20px; margin-right:20px'>
    <h1>A Photo of a Beautiful Landscape</h1>
    <div id = 'links sections'>
        <a href="https://www.w3schools.com/tags/default.asp" style = 'text-decoration: none;'>HTML tags</a>
        <a href="https://www.udacity.com", class = 'green_text'>Udacity</a>
        <a href="https://html.spec.whatwg.org">The HTML spec</a>
    </div>
    <div id = 'paragraphs sections'>
        <p id = 'p_top' style = 'font-weight:bold; color: red'>I'd really like to visit this land someday</p>   
        <p id = 'p_middle' class = 'italic_text green_text'>It is a city in <span style="color:orange">Greece</span> that looks very white and clean in pjotos</p>  
        <p id = 'p_bottom' class = 'italic_text green_text' style= 'color:green'>I have never been but someday I will be</p>  
    </div>
    <img src="photo.jpg" style = 'width:200px;' alt="Country Landscape">
</body>

</html>


CSS Rules and Syntax
CSS is essentially a set of rules that you can use to stylize html. The W3 Schools CSS Website 
is a good place to find all the different rules you can use. These including styling text, links, 
margins, padding, image, icons and background colors among other options.

The general syntax is that you:

- select the html element, id, and/or class of interest
- specify what you want to change about the element
- specify a value, followed by a semi-colon
For example

a {
  text-decoration:none;
}
where a is the element of interest, text-decoration is what you want to change, and none is the value. 
You can write multiple rules within one set of brackets like:

a {
  text-decoration:none;
  color:blue;
  font-weight:bold;
}
You can also select elements by their class or id.

To select by class name, you use a dot like so:

.class_name {
   color: red;
}
To select by id name, you use the pound sign:

#id_name {
  color: red;
}
You can make more complex selections as well like "select paragraphs inside the div with id "div_top" . 
If your html looks like this,

<div id="div_top">
   <p>This is a paragraph</p>
</div>

then the CSS would be like this:

div#div_top p {
  color: red;
}


Margins and Padding
The difference between margin and padding is a bit tricky. Margin rules specify a spatial buffer on 
the outside of an element. Padding specifies an internal spatial buffer.

These examples below show how this works. They use a div element with a border. Here is the div without 
any margin or padding:

<div style="border:solid red 1px;">
    Box
</div>

Margin
In this case, the div has a margin of 40 pixels. This creates a spatial buffer on the outside of the div element.

<div style="border:solid red 1px;margin:40px;">
    Box
</div>

Padding
This next case has a padding of 40px. In the case of padding, the spatial buffer is internal.

<div style="border:solid red 1px;padding:40px;">
    Box
</div>

Margin and Padding
In this case, the div element has both a margin of 40 pixels and a padding of 40 pixels.

<div style="border:solid red 1px;margin:40px;padding:40px;">
    Box
</div>
Box
Specifying Size: Pixels versus Percent versus EM Units
In CSS there are various ways to define sizes, widths, and heights. The three main ones are pixels, 
percentages, and em units.

When you use px, you're defining the exact number of pixels an element should use in terms of size. So

<p style="font-size: 12px;">
means the font-size will be exactly 12 pixels.

The percent and em units have a similar function. They dynamically change sizing based on a browser's default 
values. For example

<p style="font-size: 100%"> 
means to use the default browser font size. 150% would be 1.5 times the default font size. 50% would be half. 
Similarly, 1em unit would be 1 x default_font. So 2em would be 2 x default font, etc. The advantage of using 
percents and em is that your web pages become dynamic. The document adapts to the default settings of whatever 
device someone is using be that a desktop, laptop or mobile phone.

As an aside, percentages and em units are actually calculating sizes relative to parent elements in the html 
tree. For example, if you specify a font size in a body tag , then the percentages will be relative to the 
body element:

<body style="font-size: 20px">
    <p style="font-size:80%">This is a paragraph</p>
...
</body>

Because different browsers might render html and CSS differently, there isn't necessarily a right or wrong way 
to specify sizes. This will depend on who will use your website and on what type of devices. You can read more 
here. You won't need to worry about all of this because in the web app, you're going to use a CSS framework that 
takes care of all of this for you.