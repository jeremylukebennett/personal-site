var blog1 = document.getElementById("blog1");
var blog2 = document.getElementById("blog2");
var blog3 = document.getElementById("blog3");
var blog4 = document.getElementById("blog4");

let blogEntries = [blog1, blog2, blog3, blog4];


blogEntries[3].innerHTML = `
<h2>Saturday, January 27th 2018</h2>

<p>I’ve been reading about IIFEs (Immediately Invoked Function Expressions) a bit as I don’t fully understand their structure or purpose. I may have a better handle on them now..</p>
<p>IIFE’s are nameless functions that invoke themselves immediately after they are expressed. They look like anonymous functions, but are surrounded by parenthesis and topped of with <code>();</code>   <— This last bit is what invokes them.</p>
<p>So why would you use an IIFE? It seems to be an issue of privacy among other things. One issue with named functions is that they are susceptible to being called later in the program, possibly by accident. If a function is to be used only once, then it can make sense to make it an IIFE to avoid it being invoked later on. Without a name, it cannot be called up again further in the code. This also means that all of the code in the code block of an IIFE remains within the scope of that function. A blog entry on codeburst.io made the point, too, that by naming a function, the developer “pollutes the global name space”. In other words, if I understand correctly, the name applied to the function is unavailable as a naming tool for any other variable or function in the code. </p>
<p>I still feel that I only have a loose understanding of the practical use of IIFEs, but I think this foundation will be useful for now.</p>

`

blogEntries[2].innerHTML = `
<h2>Monday, January 22nd 2018</h2>

<p>Just learning about object literals, so I think I’ll reflect my understanding here. Object literals are objects in their most basic form. That is, an object name followed by curly brackets and a list of key/value pairs. This is in contrast to Constructor objects/Constructor Functions, which are blueprints that generate objects. Constructor Functions look like function declarations. A key difference is that the name of the function is capitalized, to indicate that it is, in fact, a constructor function. The arguments that are passed into the constructor function are the values that will populate the properties in the constructor function, which at this point will start to look more like an object literal. Inside the code block of the constructor function you’ll list out key/value pairs. Here’s an example: </p>
<div class="code-block">            
    <code>function Person(first, last, age, eye) {<br>
            this.firstName = first;<br>
            this.lastName = last;<br>
            this.age = age;<br>
            this.eyeColor = eye;<br>
        }<br>
        var myFather = new Person("John", "Doe", 50, "blue");<br>
        var myMother = new Person("Sally", "Rally", 48, "green");<br>
    </code>
</div>
<p>When you do this, you’re basically laying the foundation for the creation of properties in any object you create with the constructor function (hence the ‘this.___’ line).  You create the property name (in this case the first one is ‘firstName’, and then the value corresponds with the argument that will be passed into the function. So when the constructor is used to create a new object, you’ll enter the values you want to populate the object with as arguments. If you’re creating an object for yourself in this instance, you’d type <code>new Person(Jeremy, Bennett, 30, blue)</code> </p>
`

blogEntries[1].innerHTML = `
<h2>Monday, January 15th 2018</h2>

<p>My first group project is done, and I’ve been reflecting a bit on what I learned and what I would do differently the next time around.</p>

<p>In many ways this was a difficult experience to judge because it was essentially the first hands on programming assignment we’ve been given. I feel like I won’t have a solid sense of what I’ve learned until I have something else to compare it to. Of course, that might sound like a cop out, so let me talk about what I did notice. </p>

<p>I immediately noticed a measure of anxiety, which I mentioned in my previous post. I think I’m so used to studying and understanding individual concepts in HTML/CSS and JavaScript that I hadn’t accounted for how different it would feel trying to tie them all together in a cohesive project. It’s way harder than I would’ve expected. It’s sort of like the difference between learning the meaning of individual words and constructing meaningful sentences. Quite different! So to that end I learned that I have a lot to learn about applying these concepts in practical settings. That said, I feel more confident than I did before, and feel as though I could tackle a project on my own with more success. But I’m sure I’ll be astonished by the sheer number of unknown-unknowns 6 months from now. I’ve sort of been faced for the first time in this discipline with the endless reservoir of my own ignorance. </p>

<p>So what would I have done differently? What will I do differently? I think I’ll spend more time paying attention to the quality of the code that I write. I was so taken aback by the sheer struggle to complete this project that I wrote code a bit sloppily. Given that this was our first project its probably not a huge issue, but generally, especially in a team setting, that’s not at all ideal. So I’ll aim to take a bit more time to plan and think about how I might write code in the future before I sit down to program.</p>
`

blogEntries[0].innerHTML = `<h2>Saturday, January 13th 2018</h2>

<p>Blog post one! I’ve finally started the 6 month immersive front-end development program at Nashville Software School. It’s been a long time coming. So.. what are my impressions?</p>

<p>The first week and a half was fairly straight-forward. Mostly clerical stuff, not a ton of coding (or at least not a ton of material 
that wasn’t covered in the pre-work). To that end, I’ve really enjoyed the instruction on design we’ve been given so far. This is 
material that was only loosely covered in the pre-work, but is equally rigorous in its own way. I’ve been surprised at how challenging it is to 
think honestly about the best ways to solve a problem. To even come up with a truly relevant problem to solve is a feat in and of itself. 
I look forward to exploring these questions further.</p>

<p>I definitely noticed some stress and anxiety when we began our first group project. Its difficult not to compare oneself to the people 
around us, but this was the first time I was confronted directly with other people’s level of understanding in the program. I immediately 
felt intimidated. Things that I thought were a slam-dunk for me in the pre-work seemed wholly abstract and ephemeral in practice. 
And those in my group seemed to have a confidence and fluency that I felt I lacked. To a certain degree I think I was simply paired with 
a great group of people, and it was difficult not to feel inferior with them (its worth noting that they were all extremely supportive 
and cool). I was relieved at one point when I mentioned in passing that I felt like I was the weakest link in the group to hear them 
respond with surprise. Maybe I’m just fooling myself? I don’t know.</p> 

<p>Either way, I think a feeling of discomfort in this context isn’t 
the worst thing in the world. I think whatever it takes to remind me to question my understanding and learn more is useful at this point.</p>`

