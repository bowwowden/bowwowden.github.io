---
layout: default
title:  "VLAN and Trunking for CCNA"
date:   2023-09-01
categories: jekyll update
---

# VLAN and Trunking for CCNA.
**2023-09-19**

VLAN and Trunking

Without VLANS, swithches think every port is a broadcast domain. 
Grouping of ports into VLANS prevents broadcast storms.

VLANS are good for segmenting L2 networks and security.

DTP - Dynamic trunking protocol

### Traffic Types
- Network management: troubleshooting
- IP telephony: Voip
- IP Multicast: data streaming across network
- Normal data: typical application traffic
- Scavenger class: all traffic that exceeds normal flows

### Types of VLANs
- Data VLAN: user generated traffic
- Default VLAN: factory default. good for L2, cdp
- Blackhole VLAN: ports go nowhere for security
- Native VLAN: dummy identity
- Management VLAN: for maanagmenet
- Voice VLAN: Voip

### Trunking VLANS  
An ethernet point to point line between switches is a trunk. It carries traffic of multiple VLANs
over the singular link. One switch port can carry many VLANs' traffic.

### Frame tagging
When a frame is on a trunk link, VLAN info is added in tag.

Switch takes frame, inserts VLAN tag, recalculates FCS, and sends frame out of trunk port.

Tag consists of 16-bit type field. Ethernet is set 0x800.
Tag protocol ID (TPID)


Tag control info Field: 3 bits of group, 1 bit canonical format identfier, 12 bits of VLAN ID.

### Dynamic trunking protocol

DTP is a Cisco proprietary protocol. It negotiates status of trunk and trunk every switch.

### Trunking modes
- Switchport mode trunk: switch port periodically sends DTP messages to remote port, advertising
it is in an unconditonal trunking state.
- Switchport mode trunk dynamic auto: switchport advertises it can trunk but does not request to go to trunking state. It
goes to trunking if remote port is **on** or desirable. Else does not.
- Switchport mode dynamic desirable: advertises and requests to go to trunking state.
- Switchport nonnegotiate: unconditonal trunking state. Used when working with another switch vendor.

### VLAN configuration

Show vlan brief - show what interfaces are in what VLAN.

### Creating a VLAN
Either in global config mode or under interface. To name VLANs, global mode.

Can configure one interface at a time or use a range.

### Security Best Practices 
A different VLAN for management and default.

commands good to know
```
show interfaces trunk
switchport access vlan
show mac address-table
show interfaces switchport
show VLAN
```

In CCNA, it's important to know how to identify VLAN misconfigurations.

VLAN lists must match between ends of a trunk.

Most common misconfig:
swithport mode dynamic auto is not auto. They wait for other device to request.



