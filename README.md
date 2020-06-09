# Project Overview

## Project Name

"Your 10 Favorite NBA Players!"

## Project Description

"Your 10 Favorite NBA Players" allows users to search for their favorite player in a search box to generate a player's gif that is randomized and player's height, position, and the team he is currently in. It uses local storage to save up to 10 players and the users have the option to remove and add their favorite player. 

## API and Data Sample

[NBA Players Statistics API](https://www.balldontlie.io/#get-all-players)

```
"data": [
        {
            "id": 14,
            "first_name": "Ike",
            "height_feet": null,
            "height_inches": null,
            "last_name": "Anigbogu",
            "position": "C",
            "team": {
                "id": 12,
                "abbreviation": "IND",
                "city": "Indiana",
                "conference": "East",
                "division": "Central",
                "full_name": "Indiana Pacers",
                "name": "Pacers"
            },
            "weight_pounds": null
        },
        {
            "id": 25,
            "first_name": "Ron",
            "height_feet": null,
            "height_inches": null,
            "last_name": "Baker",
            "position": "G",
            "team": {
                "id": 20,
                "abbreviation": "NYK",
                "city": "New York",
                "conference": "East",
                "division": "Atlantic",
                "full_name": "New York Knicks",
                "name": "Knicks"
            },
            "weight_pounds": null
        },
        {
            "id": 47,
            "first_name": "Jabari",
            "height_feet": null,
            "height_inches": null,
            "last_name": "Bird",
            "position": "G",
            "team": {
                "id": 2,
                "abbreviation": "BOS",
                "city": "Boston",
                "conference": "East",
                "division": "Atlantic",
                "full_name": "Boston Celtics",
                "name": "Celtics"
            },
            "weight_pounds": null
        },
        {
            "id": 67,
            "first_name": "MarShon",
            "height_feet": null,
            "height_inches": null,
            "last_name": "Brooks",
            "position": "G",
            "team": {
                "id": 15,
                "abbreviation": "MEM",
                "city": "Memphis",
                "conference": "West",
                "division": "Southwest",
                "full_name": "Memphis Grizzlies",
                "name": "Grizzlies"
            },
            "weight_pounds": null
        }

```

## API Data Sample

[GIPHY API](https://developers.giphy.com/docs/api/endpoint)


```
{
   "data":
   [
       {
           "type": "gif",
           "id": "3o7aTnQqygA3TcukFi",
           "url": "https://giphy.com/gifs/nba-basketball-3o7aTnQqygA3TcukFi",
           "slug": "nba-basketball-3o7aTnQqygA3TcukFi",
           "bitly_gif_url": "https://gph.is/2dFtY7Q",
           "bitly_url": "https://gph.is/2dFtY7Q",
           "embed_url": "https://giphy.com/embed/3o7aTnQqygA3TcukFi",
           "username": "nba",
           "source": "https://nba.com",
           "title": "lebron james photobomb GIF by NBA",
           "rating": "g",
           "content_url": "",
           "source_tld": "nba.com",
           "source_post_url": "https://nba.com",
           "is_sticker": 0,
           "import_datetime": "2016-10-04 13:28:27",
           "trending_datetime": "2018-06-16 21:00:01",
           "images":
           {
               "downsized_large":
               {
                   "height": "270",
                   "size": "1057044",
                   "url": "https://media0.giphy.com/media/3o7aTnQqygA3TcukFi/giphy.gif?cid=b74736c9c557d70c2510f03ec2f1c18316824beb1511f370&rid=giphy.gif",
                   "width": "480"
               },
               "fixed_height_small_still":
               {
                   "height": "100",
                   "size": "11606",
                   "url": "https://media0.giphy.com/media/3o7aTnQqygA3TcukFi/100_s.gif?cid=b74736c9c557d70c2510f03ec2f1c18316824beb1511f370&rid=100_s.gif",
                   "width": "178"
               },
               "original":
               {
                   "frames": "16",
                   "hash": "d8ac4361f9829ff8f6fa4741e0929afe",
                   "height": "270",
                   "mp4": "https://media0.giphy.com/media/3o7aTnQqygA3TcukFi/giphy.mp4?cid=b74736c9c557d70c2510f03ec2f1c18316824beb1511f370&rid=giphy.mp4",
                   "mp4_size": "136202",
                   "size": "1057044",
                   "url": "https://media0.giphy.com/media/3o7aTnQqygA3TcukFi/giphy.gif?cid=b74736c9c557d70c2510f03ec2f1c18316824beb1511f370&rid=giphy.gif",
                   "webp": "https://media0.giphy.com/media/3o7aTnQqygA3TcukFi/giphy.webp?cid=b74736c9c557d70c2510f03ec2f1c18316824beb1511f370&rid=giphy.webp",
                   "webp_size": "257946",
                   "width": "480"
               }
	     ]
```

## Wireframes

https://wireframe.cc/wbS2nO


### MVP/PostMVP

#### MVP 

- Render player's GIF on page 
- Render player's data on page
- Use local storage to save and delete user's favorite players


#### PostMVP  

- Advanced CSS 
- Add Animation
- Ask UI/UX Designers for advice and insights.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 8| Project Plan(Wireframes / priority Matric / Time Frames) | Complete
|June 9| Core Application Structure (HTML and Javascript(Rendering GIFs and players' data on page)| Incomplete
|June 10 CSS / Local Storage | Incomplete
|June 11| More CSS | Incomplete
|June 12| MVP | Incomplete
|June 15| Present | Incomplete

## Priority Matrix
![Priority Matric](https://git.generalassemb.ly/kangja0801/new-project/blob/master/Priority-Matrix.png).

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML Structure | H | 1.5hr|  min | min |
| Basic CSS  | H | 1.5hrs| hrs | hrs |
| API to Display Randomized GIFs  | H | 4hrs | hrs | hrs |
| API to Display Players' Statistics | H | 5hrs | hrs | hrs |
| Local Storage | H | 6hrs | hrs | hrs |
| More CSS | M | 4.5hrs | hrs | hrs |
| Total | H | 22.5hrs| hrs | hrs

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
