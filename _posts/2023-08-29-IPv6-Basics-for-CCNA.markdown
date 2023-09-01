---
layout: default
title:  "IPv6 Basics for CCNA"
date:   2023-08-29
categories: jekyll update
---

# IPv6-Basics-for-CCNA
**2023-08-29**

Recently I've been studying for the CCNA. There's a lot more than meets the eye to IPv6.
Here's an overview of what I know about it.

### Features of IPv6: 

- **128-bit address space**: This eliminates the need for NAT/PAT since there's enough 
addresses to make them all globally unique. There's no distinguishing between public and private IPs from the address.
- **Mobility and security**: IPv4 devices such as phones will break connections as
people move. In IPv6 connections don't have to break. Also, IPsec protocols are built into
IPv6.
- **Transition strategies**: IPv4 can slowly be incorporated with IPv6. There are
4-6 tunnels for instance, so the two can work together. Slowly the world moves toward IPv6.
Tunneling is one way to use both IPv4 and IPv6. Another way is a dual-stack configuration
that uses both IP stacks.
- **Simpler header**: There's no broadcast address in IPv6. This prevents broadcast
storms caused by loops. There are also no requirements for a processing checksum.

![](/_assets/images/1600px-IPv6_header_rv1.png)

