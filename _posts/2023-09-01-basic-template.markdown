---
layout: default
title:  "basic template"
date:   2023-08-29
categories: jekyll update
---

testing rouge syntax highlighter

{% highlight cisco_ios %}

interface FastEthernet0/5
    switchport trunk native vlan 99
    switchport trunk allowed vlan 11,20
    switchport mode trunk
    switchport nonegotiate

{% endhighlight %}