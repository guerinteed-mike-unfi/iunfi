Database name - iunfi

------------------------------------

apache settings for Drupal 8

https://www.youtube.com/watch?v=pAmyJPPcmTs

HOST FILE ENTRY---------------------

127.0.0.1	iunfi-local.com

------------------------------------

APACHE VHOST ENTRY------------------

<VirtualHost *:80> 
    ServerName iunfi-local.com
    ServerAlias iunfi-local.com
    DocumentRoot "C:\wamp\www\iunfi\drupal" 
</VirtualHost>

*** note - I think you may need to change port info

-----------------------------------

ADMIN ACCOUNT----------------------

username - iunfi-admin
password - Organic1