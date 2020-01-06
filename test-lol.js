import 'a-fourth-dependencya'; // none
import * from 'some-dependancya'; // all
import ThisClass from 'some-other-dependencya'; // single
import { aMethod, bMethod } from 'a-third-dependencya'; // multiple

var emailExpression = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
