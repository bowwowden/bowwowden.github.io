---
layout: default
title:  "basic template"
date:   2023-10-01
categories: jekyll update
---


# Spanning Tree Protocol
**2023-10-1**

STP alone is an L2 protocol.
Per VLAN spanning tree PVST and Rapid STP, RSTP improve original standard.

STP prevents:
- broadcast storms
- multiple frame transmission
- MAC database instantiating

STP puts some parts in blocking state to prevent loops.

Interfaces/ports are either in blocking/forwarding state.

STP config is exchanged by interfaces every 2 seconds, using a multicast frame (BPDU), bridge protocol dataunit.

Bridge ID
![image description](/assets/images/bridge-id2.webp)

### Rapid PVST+

RSTP runs for each VLAN. High demand for resources. 

RSTP calls blocking the discarding state.
It also removes listening state and just calls it discarding.

Adds more port rules:
- Alternate, Backup, Disabled
- Alternate: suboptimal BPDU

commands:
```
spanning-tree vlan 1 root primary
spanning-tree vlan 1 root secondary
```

primary # set in 4096 increments.

commands:
```
show spanning-tree
```

Cisco Portfast

commands:
```
conf t
    # switchport mode access
    # spanning-tree portfast
    # spanning-tree bpduguard enable
```




