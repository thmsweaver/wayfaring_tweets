#Wayfaring Tweets

##Overview
[Wayfaring Tweets](http://glacial-hollows-6244.herokuapp.com/ "Wayfaring Tweets") is a Rails app that allows users to retrieve an array of geo-tagged tweets of a chosen hashtag to be overlayed onto a gorgeous [Leaflet](http://leafletjs.com/ "Leaflet") map. The project was initially intended to allow users to recount roadtrips, but has potential for multiple use cases. Wayfaring Tweets was developed over a 5-day sprint as my final project for [General Assembly's WDI program](https://generalassemb.ly/education/web-development-immersive "General Assembly's WDI program"), and was inspired by my love of maps and telling stories. 

##Technologies Used
* [Twitter Rest API v1.1](https://dev.twitter.com/docs/api/1.1 "Twitter Rest API v1.1")
* [RequireJS](http://requirejs.org/ "RequireJS")
* [Backbone.js](http://backbonejs.org/ "Backbone.js")
* [Leaflet](http://leafletjs.com/ "Leaflet")

##User Stories
* A user can submit a twitter handle and hashtag to instantly view an array of geo-tagged tweets
* A user can click on an individal Leaflet marker to view associated tweet details
* A user can load an entirely new array of tweets after submitting a new twitter handle and hashtag

##How to use Wayfaring Tweets:
###On a desktop (doing this on a phone will be very similar), log in to your twitter account, then:
* click the cog in the upper, right corner
* a drop-down menu will appear, click 'settings'
* after clicking 'settings' visit the left sidebar to select 'security and privacy'

![twitter account settings](./README/twitter_account_settings.jpg)

* upon selecting 'security and privacy' the center of your screen will reload with new options
* scroll down to 'privacy'
* then select the checkbox 'Add a location to my tweets'

![twitter account settings](./README/twitter_security_privacy.jpg)

* you have now finished configuring your twitter account and are almost ready to start tweeting from a mobile device!

###Grab your phone and:
* download the free twitter mobile app if you haven't already
* go to your phone's settings ensure that 'location services' is switched on
* within the 'location services' menu, be sure to specifically enable Twitter

![moblie phone location services](./README/twitter_location_services.png)

###Go somewhere!
* so it's worth mentioning that this will only work if tweeting from a device not connected to wifi. There is a silver lining to that; however, as you are now compelled to get out there and explore.
* when tweeting about your adventure, be sure to choose a unique hashtag that will begin each tweet's text
* written accounts are great, but include PICTURES!
* and before you send each tweet, make sure to drop that pin:

![twitter moblie pin drop](./README/geo_tweet.png)


##Sample Wayfaring Roadtrip
![Example 2](./README/wayfaring_tweets.jpg)
