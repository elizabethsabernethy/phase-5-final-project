# Phase 5 Final Project: Ruby Spa

This project utilized a React.js frontend to structure a basic react website, as well as a Ruby on Rails backend to manage the data. I utlized a series of interconncted components in the front and controllers/models in the back to create optimal functionality for the best user experience possible. 

## Purpose of Project

The purpose of this website is to act as a site for users to book and manage appointments with providers from the fictional "Ruby Spa". Non-account holders are able to view the homepage, as well as the varying departments of the spa. Each department shows a list of providers, as well as a service menu. Each provider has a button the user can push to show the specific services they offer. Conversley, each service also has a button which displays stylists that can provide that specific service. Through having an account, a user is able to book appointments, edit or delete their respective appointments they have already booked, edit profile information such as their name, username or password, and finally delete their account if they choose.

## Prerequisites
- Ruby 2.7.4
Verify which version of Ruby you're running by entering this in the terminal:
```
$ ruby -v
```
Reccomended version is 2.7.4. If you need to upgrade you can install it using rvm:
```
$ rvm install 2.7.4 --default
```
You should also install the latest versions of `bundler` and `rails`:
```
$ gem install bundler
$ gem install rails
```
- NodeJS (v16), and npm
Verify you are running a recent version of Node with:
```
$ node -v
```
If your Node version is not 16.x.x, install it and set it as the current and default version with:
```
$ nvm install 16
$ nvm use 16
$ nvm alias default 16
```
You can also update your npm version with:
```
$ npm i -g npm
```
- Postgresql
# WSL Install
To install Postgres for WSL, run the following commands from your Ubuntu terminal:
```
$ sudo apt update
$ sudo apt install postgresql postgresql-contrib libpq-dev
```
Then confirm that Postgres was installed successfully:
```
$ psql --version
```
Run this command to start the Postgres service:
```
$ sudo service postgresql start
```
Finally, you'll also need to create a database user so that you are able to connect to the database from Rails. First, check what your operating system username is:
```
$ whoami
```
If your username is "ian", for example, you'd need to create a Postgres user with that same name. To do so, run this command to open the Postgres CLI:
```
$ sudo -u postgres -i
```
From the Postgres CLI, run this command (replacing "ian" with your username):
```
$ createuser -sr ian
```
Then enter control + d or type logout to exit.

# Postgresql Installation for OSX
To install Postgres for OSX, you can use Homebrew:
```
$ brew install postgresql
```
Once Postgres has been installed, run this command to start the Postgres service:
```
$ brew services start postgresql
```
## Functionality Walk-Through

When a user first enters the website, they will see the Ruby Spa homepage. Here they are able to view the navigation bar which houses the home tab, the hair, nails, facial, massage tabs, and a tab for users to login (or sign-up). As mentioned before, if not logged into an account, the only thing a user can do is interact with the providers and services.

![tabs-gif](https://imgur.com/BAP1OBU.gif)
![providers-gif](https://imgur.com/74kVoxY.gif)

Once they have viewed the different departments, they may decide to sign-up or log into their account.

Once logged in, a user is taken to their profile page. Here they can view/edit/delete their appointments, edit their profile, and delete their account. If a user edits their profile, all changes are reflected immediately and are validated through error handling in the front and backend to prevent any problems. 

![login-gif](https://imgur.com/MnOj3Ud.gif)
![signup-gif](https://imgur.com/mjkiD9N.gif)

Being logged in also allows users to book an appointment, if they navigate back to the Book Appt page. Successfully booking an appointment will immediately add the appointment details to the users profile page. The appointment also shows options to edit or delete the appointment. 

![appt-gif](https://imgur.com/JmXv5SJ.gif)

Once the user is finished with whatever they're doing, they can click the logout button, and they will return to the homepage. If it comes to it, and the user decides to delete their profile, they are prompted with an alert to ensure they actually want to delete their account. If they follow through, the users information will be destroyed, includeing any related appointments they may have had booked. 

![logout-gif](https://imgur.com/QpkHikY.gif)

## Contributing
If you would like to contribute to the project, please check out this link and follow the steps!
https://docs.github.com/en/get-started/quickstart/contributing-to-projects


# Sources/ References

Youtube Walk-through: https://www.youtube.com/watch?v=ergExHdtZ3I
