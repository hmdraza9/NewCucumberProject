$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CucuHandson.feature");
formatter.feature({
  "line": 1,
  "name": "Opening multiple pages",
  "description": "",
  "id": "opening-multiple-pages",
  "keyword": "Feature"
});
formatter.before({
  "duration": 288900,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": ":",
  "description": "",
  "id": "opening-multiple-pages;:",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on Home Page of Website",
  "rows": [
    {
      "cells": [
        "http://google.com/"
      ],
      "line": 5
    },
    {
      "cells": [
        "http://facebook.com/"
      ],
      "line": 6
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I\u0027m taken to Home Page",
  "rows": [
    {
      "cells": [
        "[http://googly.com/],[http://googly.com/]"
      ],
      "line": 8
    },
    {
      "cells": [
        "http://facebooky.com/"
      ],
      "line": 9
    },
    {
      "cells": [
        "http://twitter.com"
      ],
      "line": 10
    },
    {
      "cells": [
        "http://mogli.com"
      ],
      "line": 11
    },
    {
      "cells": [
        "http://hi5.com"
      ],
      "line": 12
    },
    {
      "cells": [
        "http://selenimhq.org"
      ],
      "line": 13
    },
    {
      "cells": [
        "0http://telangana.com"
      ],
      "line": 14
    },
    {
      "cells": [
        "1http://telangana.com"
      ],
      "line": 15
    },
    {
      "cells": [
        "2http://telangana.com"
      ],
      "line": 16
    },
    {
      "cells": [
        "3http://telangana.com"
      ],
      "line": 17
    },
    {
      "cells": [
        "4http://telangana.com"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CucuDataTableForDataInput.loadPage(DataTable)"
});
formatter.result({
  "duration": 301601200,
  "status": "passed"
});
formatter.match({
  "location": "CucuDataTableForDataInput.loginPage(DataTable)"
});
formatter.result({
  "duration": 464100,
  "status": "passed"
});
formatter.after({
  "duration": 90900,
  "status": "passed"
});
});