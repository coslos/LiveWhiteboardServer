> Guess you're a contributor now!
>
> **This is the most important file for you to read as a contributor.** If written well, this file will explain *everything* you need to know in order to successfully contribute to the project. If a project *does not* have this file, you should ask for guidelines by opening an issue.

# Contributor's Guide

Thanks for your interest in contributing! Please read carefully through our guidelines below to ensure that your contribution adheres to our project's standards.

## Code of Conduct

To hold a safe space for all contributors, we expect all project participants to adhere to our Code of Conduct. Please read the [full text](/.github/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Issue Tracking

We use [GitHub Issues](/issues) to track all tasks related to this project.

To help you get your feet wet and get you familiar with our contribution process, we have a list of friendly issues (to be added soon) that contain tasks which are fairly easy to fix. This is a great place to get started.

## Getting Started


## Build the project locally

In order to contribute to a project on GitHub, you must first get a copy of the project running locally on your computer.

There are five steps to building this project:

1. [Set up Git and Install Node.js](#set-up-git-and-install-nodejs)
1. [Fork the repository](#fork-the-repository)
1. [Clone your fork](#clone-your-fork)
1. [Install dependencies](#install-dependencies)
1. [Run the project](#run-the-project)

Once you get the project built, see if you can fix some issues(to be updated soon).

### Set up Git and Install Node.js

All GitHub projects are backed by a version control software called *Git*. You'll need to set up Git in order to contribute to *any* project on GitHub.

If you are new to Git and Github, it is advisable you go through[this
    link](https://guides.github.com/)
    before moving to the next step.

This specific project is written in JavaScript and uses Node.js as it's runtime. You'll need to [install Node.js](https://nodejs.org/en/) in order to run the project.

### Fork the repository

A *fork* is a copy of a repository. Forking a repository lets you to make changes to your copy without affecting any of the original code.

Click **Fork** (in the top-right corner of the page) to copy this repository to your GitHub account. [Help Guide to Fork a repository](https://help.github.com/articles/fork-a-repo/).

### Clone your fork

A *clone* is a downloaded version of a repository. Cloning our fork lets you download a copy of the repository to your computer.

Use `git` to clone your fork

```
$ git clone https://github.com/YOUR-USERNAME/LiveWhiteboard-Website
```

### Install dependencies

Did you know that the author usually does not write all of the code in a project?

The beauty of open source is that you can install and use code that other people have written, allowing you to focus on the unique requirements of your project. Third-party code that your project installs is called a *dependency* because it is required to work.

This project uses [npm](https://www.npmjs.com/), a command-line tool bundled with Node.js, to maintain third-party dependencies. npm uses the package.json present in the repository to install the dependencies.

First, navigate into the project's directory

```
$ cd LiveWhiteboard-Website
```

Next, use `npm` to install the project' dependencies
```
$ npm install
```

### Run the project

In addition to installing dependencies, `npm` also lets you run commands defined by the project's author. This project has a few commands defined.

Start the Server:
```
$ npm start
```

## Submitting a Pull Request

What is a pull request?
[Visit link](https://help.github.com/articles/about-pull-requests/)

If you decide to fix an issue, it's advisable to check the comment thread in
case there's somebody already working on a fix. If no one is working on it at
the moment, kindly leave a comment stating that you intend to work on it so
other people don't accidentally duplicate your effort.

In a situation where by somebody decides to fix an issue but doesn't follow up
for a particular period of time, say 2-3 weeks, it's acceptable to still pick
up the issue but make sure to leave a comment.


1.  Create a branch specific to the issue you are working on.

    ```shell
    git checkout -b update-readme-file
    ```

    For clarity to yourself and others on the issue you're working on, name
    your branch something like `update-xxx` or `fix-xxx` where `xxx` is a short
    description of the changes you're making. For example `update-readme` or
    `fix-typo-on-contribution-md`.

2.  Open up the project in your favourite text editor, select the file you want
    to contribute to and make your changes.

    If you are making changes to the README.md file, you would need to have
    Markdown knowledge. Visit [here to read about Github
    Markdown](https://guides.github.com/features/mastering-markdown/) and [here
    to practice](http://www.markdowntutorial.com/)


3.  After making your changes in the new git branch then add your modified
    files to git.

    ```shell
    git add path/to/filename.ext
    ```

    You can also add all unstaged files using:

    ```shell
    git add .
    ```

    Note, using a `git add .` will automatically add all files. You can do a
    `git status` to see your changes, but do it before `git add`.

4.  Commit your changes using a descriptive commit message.

    ```shell
    git commit -m "Brief Description of Commit"
    ```

5.  Push your commits to your Github Fork:

    ```shell
    git push -u origin branch-name
    ```

6.  Submit a pull request.

    Within GitHub, visit this main repository and you should see a banner
    suggesting to make a pull request. While you're writing up the pull
    request, you can add `Closes #XXX` in the message body where `#XXX` is the
    issue you're fixing. So an example would be `Closes #42` would close issue
    `#42`.

## Helpful Resources