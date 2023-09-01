---
layout: default
title:  "IPv6 Basics for CCNA"
date:   2023-08-29
categories: jekyll update
---

# IPv6 Basics for CCNA
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

### IPv6 Header
![image description](/assets/images/IPv6-Header-Format.png)

-**IPv4**: unicast, multicast, broadcast

-**IPv6**: unicast, multicast, anycast

### Unicast

IPv6 address consists of 48 bits for the global routing prefix.

16-bit subnet ID 

64-bit interface ID

(3x16) + (1x16) + (4x16) = 128 bits.

An interface can have multiple global unicast addresses. It dnoes need a global unicast address,
but needs a **link-local** address at the minimum.


**<ins>Global Unicast Address</ins>**

Can be manual or dynamic.

**<ins>Link-Local Address</ins>**

These are a type of unicast address.
Packets with a link local source and destination are not routable off the link.

They have a range of FE80-FEEF first hextet.

**<ins>Loopback Address</ins>**

These are not assigned to an interface. All bits are 0 except last bit is 1.

It is used to test.

**<ins>Unspecified Address</ins>**

All 0's address. ::.

It is used in inital configuration when device does not have an IPv6 address. 

It it used as source address. 

**DAD** (duplicate address detection) checks to ensure a unique link local address.
It sends to its new address a packet to all nodes as a multicast packet.

If it receives a response, then the check fails.

**<ins>Unique Local Address</ins>**

Private address. Globally unique.
The idea is that without a central DHCP server for a multisite network, 
you can still have unique private addresses at each location, unlike IPv4.

**<ins>IPv4 Embedded Address</ins>**

NAT-PT and NAT64 translate IPv4 to IPv6.

IPv4 is embedded within low-order bits of IPv6. 
It puts the IPv4 address at the end and pads rest of address. 

Address is not necessarily globally unique.

192.168.10.10 becomes 

::FFFF.192.168.10.10

### Multicast

Send to multiple destinations.
Multicast address defines a multicast group. Two types.
Context of specific protocols. 

**<ins>Assigned Multicast</ins>**

-**All nodes multicast group**: Router might use this for advertisement.
-**All routers multicast group**: Multicast group that all IPv6 routers join.

**<ins>IPv6 Unicast Routing</ins>**

Identifier for single interface of a device.
Might send router solication message here.

**<ins>Solicited-Node Multicast</ins>**

Mapping of devices unicast address with a solicited node multicast prefix.

Used by device in NDP neighbor solicitation. 

"does anyone else use this address?"

Equivalent to ARP in IPv4. DAD check.

IPv6 doesn't use MAC addressing for its layer 2 connections to other computers.

However, people are too familiar with MAC addresses for them to go away. The MAC can still be found with other commands.

### Anycast

An Anycast address is assignable to more than one device or interface.
The packet is routed to the nearest address with lowest cost.

**<ins>IPv6 Subnetting</ins>**

/64 Subnet prefix.

First 48 bits are the global routing prefix.
It is assigned by the ISP.

Next 16 bits are the subnet ID. 

48 + 16 = /64 Subnet Prefix.

Interface ID = 64 bits.

**<ins>EUI-64</ins>**

Extended Unique Identifier.
1st half of MAC address. Followed by FF:FE.
2nd half of MAC address.

### Stateless Address Autoconfiguration (SLAAC)

- Stateless autoconfiguration
- DHCPv6

Stateless autoconfiguration is way to assign addresses without a DHCP server.
The EUI-64 process and NDP create a global unicast address.
Host and router configured with **ipv6 unicast-routing** command send and receive
NDP messages to establish address.

### Migration

Remember!!!

Dual stack where you can. Tunnel where you must.

IPv6 is honestly an old protocol now. We'll see if it becomes the majority addressing
scheme by the 2030s but I doubt it.












