# Project Overview
[Your 10 Favorite NBA Players!](https://pages.git.generalassemb.ly/kangja0801/nba-players/)

## Project Name

"Your 10 Favorite NBA Players!"

## Project Description

"Your 10 Favorite NBA Players" allows users to search for their 10 favorite players in a search box to generate a player's gif and to render player's name, team name, position, height, and weight. It renders up to 10 players and the users have the option to remove players using delete buttons. Users have to make sure they search for players who are currently in the league. If not, they will not get the full data rendered on the page. If there are more than one player on the left side of the list, users could double click on other player's name button to replace the values with the clicked player's gif and data.

## API and Data Sample

[NBA Players Data API](https://www.balldontlie.io/#get-all-players)

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

## API 2 and Data Sample 2

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
- Render player's data on page (player name, team name, position, height, and weight)
- Make sure the delete button works to delete user's favorite players.
- Search bar that searches for NBA players

#### PostMVP

- Advanced CSS
- Add Animation
- Add statistics(points, rebounds, steals, blocks, assists)
- Ask UI/UX Designers for advice and insights.

## Project Schedule

| Day     | Deliverable                                                                               | Status     |
| ------- | ----------------------------------------------------------------------------------------- | ---------- |
| June 8  | Project Plan(Wireframes / priority Matric / Time Frames)                                  | Complete   |
| June 9  | Core Application Structure (HTML and Javascript(Rendering GIFs and players' data on page) | Complete   |
| June 10 | CSS / Remove Buttons / Search Bar                                                         | Complete   |
| June 11 | More CSS                                                                                  | Complete   |
| June 12 | MVP                                                                                       | Complete   |
| June 15 | Present                                                                                   | Incomplete |

## Priority Matrix

![Priority Matric](https://git.generalassemb.ly/kangja0801/new-project/blob/master/Priority-Matrix.png).

## Timeframes

| Component                                     | Priority | Estimated Time | Time Invested | Actual Time |
| --------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Basic HTML Structure                          |    H     |      2hrs      |     3hrs      |    3hrs     |
| Basic CSS                                     |    H     |      2hrs      |     2hrs      |    2hrs     |
| More HTML                                     |    H     |      4hrs      |     4hrs      |    4hrs     |
| API to Display Player's Randomized GIF        |    H     |      4hrs      |     6hrs      |    6hrs     |
| API to Display Players' Data                  |    H     |      5hrs      |     5hrs      |    5hrs     |
| Search bar that targets GIF and data API      |    H     |      3hrs      |     4hrs      |    4hrs     |
| Make tables that render player's GIF and data |    H     |      2hrs      |     9hrs      |    9hrs     |
| Remove Buttons                                |    H     |      4hrs      |     5hrs      |    5hrs     |
| More CSS                                      |    M     |      5hrs      |     10hrs     |    10hrs    |
| Total                                         |    H     |     31hrs      |      hrs      |     hrs     |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

I got the function template from stackoverflow. (URL: https://stackoverflow.com/questions/9012537/how-to-get-the-element-clicked-for-the-whole-document?fbclid=IwAR1HJCp7BGttzLAs-SB1TTY3v2aaKxXHFTxpj7KdIVFW35ycbnTpDcCIcWA)

The function allows me to get the current element(whatever element that is) in an HTML document that I clicked. E is whatever I'm clicking in HTML and it will save the value of the clicked element's id in a variable so that I could access it later.

```
  function (e) {
      e = e || window.event;
      let target = e.target;
      num = target.id;
      console.log(num);
    },
    false
  );

}
```

## Change Log

Use this section to document what changes were made and the reasoning behind those changes.
