# Uploading a YouTube video in html

In this POC I will show how to add a YouTube video in html.

## 1. Select your YouTube video

Go to YouTube and choose your video.

## 2. Take it's iframe code

First of all, you have to click on the button `Share`\
Then there will be a pop up screen where you will have a lot of icons.\
You will click on the `< >` icon which name is `Embed`\
Then you have to copy the code given you next to your video and paste it in your html file.

## 3. Check if your code is compiling and running properly

Your code must look something like this:

``` html
<div id = "video_exercise">                
            <iframe width="960" height="540" src="https://www.youtube.com/embed/2bW3HuaAUcY" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowfullscreen></iframe>
</div>
```
