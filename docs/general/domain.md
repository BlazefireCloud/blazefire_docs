# Domain / Subdomain

With us you have the possibility to create a separate subdomain for each of your systems, or, with the appropriate plan, a separate domain.

## How to setup a subdomain?
You can select your own subdomain when you create your system, simply by using the corresponding text field. The system is then available within seconds and can be used by you.

## How to setup a domain?
To link a domain to your system, you need the following: 
* You need your own domain
* You need access to the DNS of your domain

Log in to your domain provider and go to the platform where you can change your DNS settings.

If you don't already have one, create an A-record and point it to the following IP address: `178.250.174.37`

<b>It can take up to 24 hours before your domain is resolved correctly.</b>

It is important that you create your new system, which will be used on your own domain, only after you are sure that your domain will be resolved 100% to our server.

If your domain is now resolved correctly and points to our server, you can now create your system with your desired domain. Enter your own domain in the field for subdomain / domain.
It may take a few minutes before your system is ready, because we also issue an SSL certificate for your domain.

## Can I also use a subdomain together with my own domain?
Yes, but the DNS settings for an own subdomain incl. domain are different than if you only want to resolve your top level domain.

Navigate back to your DNS settings of your provider.
Create an A-Record for your subdomain.
For the value "Name" enter your desired subdomain. e.g. police. As destination you choose the same IP address. 

For the rest you can use the same steps as for your own domain.