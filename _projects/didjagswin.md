---
layout: project
featured-home: false
bodyclass: project
date: 2016-11-01
img: project-jags-thumb.png
link: http://didjagswin.com
bgcolor: 111111
textcolor: ffffff
title: Did the Jags Win?
? subtitle
description: I'm a huge Jacksonville Jaguars fan and it's a tough life for us fans. It's been 8 years since the Jags have had a winning record. Since we never win, I thought it would be funny to spin up one of those joke websites, "Did Your Team Win?
---

Our founder, Brian, is a huge Jacksonville Jaguars fan and up until recently... it was a tough life for the fans. It's been 8 years since the Jags have had a winning record (until 2018). Anwyays, since we never win, Brian thought it would be funny to spin up one of those "Did Your Team Win?" websites, like [DidDukeWin](https://www.diddukewin.com/){:target="\_blank"}. However, instead of needing to update it after each game, he wanted to find an API that tracks NFL scores in real-time, so team scores are automatically updated, without me needing to edit anything.

#### Objectives

- Find & use NFL API to check scores weekly
- Create one-page site that pull in data from feed and shows if team won or lost
- This is just for fun

#### Work Involved

Using the NFL Live API, Brian was able to get the latest score as a JSON feed, access the scores object and parse each team's scoring information for that particular week.

Since the data-set does not say which team is the winner, Brian needed to create a method to check whether or not the Jaguars were the Home or Away team and create a decision against possible scoring outcomes.

Storing the Home/Away check as a boolean variable - `isHome` and tested it against the `teamName` (in this case, an object result with string value of: "Jaguars").

Then, set up how to determine a winner. Obviously, whichever team scores more points is the winner. So, it needed to have that for each outcome (Home and Away).

```
var winnerHome = (scoreHome > scoreAway);
//returns a boolean value (true or false)
```

Now, we can check against the possible scoring outcomes:

- If team **IS** home, and the home team **IS** the winner, the outcome is: "Won at home."
- If team **IS** home, and the home team **IS NOT** the winner, the outcome is: "Lost at home."
- If team **IS NOT** home, and the home team **IS** the winner, the outcome is: "Lost at away."
- If team **IS NOT** home, and the home team **IS NOT** the winner, the outcome is: "Won at away."

Taking it a step futher.. why not do this for all the current teams that suck (Browns, Bucs, Dolphins). Since it's using Jekyll as the parsing engine for the site, all it would take is to set global variables in the `_config.yml` file and change those variables to reflect the new team's site information. Then, add a menu toggle so the user can switch between sites:

![didjagswin homepage image](/assets/images/project-didjagswin-home.png)

![didjagswin homepage image](/assets/images/project-didjagswin-bucs.png)

> [View Site](http://didbucswin.com/){:target="\_blank"}

![didjagswin homepage image](/assets/images/project-didjagswin-browns.png)

> [View Site](http://didbrownswin.com/){:target="\_blank"}

![didjagswin homepage image](/assets/images/project-didjagswin-phins.png)

> [View Site](http://didphinswin.com/){:target="\_blank"}
