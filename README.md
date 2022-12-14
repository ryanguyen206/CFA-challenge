What is the URL to your GitHub-Pages site?

What are some other applications for your API other than searching? Name a few and describe how an app using it for that purpose might work.
How can you make your app accessible to people with disabilities such as blindness or colorblindness?



1.
2. I decided to use the Free-to-Play Games API (https://rapidapi.com/digiwalls/api/free-to-play-games-database) because I enjoy playing games and I have not done a project related to games so I thought it would be fun to do. 
3. This API would also help users familarize themselves with the game world. 
4. Some considerations to make the app mobile friendly and responsive is making sure the app resizes well on any device whether it be a monitor, tablet or mobile device. Thankfully, grid-template-columns: repeat(auto-fill , minmax(300px,1fr)); automatically does that for you so it'll resize the cards to fit the browser well.
5. Some ways I have made my app accessible to people with disabilites is by providing alt tags and making sure that there is sufficent contrast between colors. This can be achieved by simply having a white background with big, bold and black text.
6. Unforutanely, the API only allows searching games through ID number and not through strings, so users would be inserting arbitrary ids unless they already know the id beforehand. I do not have control over that but that would definetely be something I would implement if I had the ability to. In addition, if I could make further changes to my project to improve/expand the experience, users would be able to sort/filter games with multiple paramters. Currently, users are only able to filter by genre and alphabetical order. I would definetely need to read more about the api documentation to see how it would work, and probably add more states to see what users are wanting to filter by.
