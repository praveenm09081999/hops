# Hops

## Problem Description
Frogs need to cross `N` lily pads to reach shore (pad `N`). Each second, one frog can hop right to the nearest unoccupied pad. Find the minimum time required for all `F` frogs to reach the shore.

## Abacus Analogy Insight
The solution mirrors how abacus beads slide along rods (focus on Frog's position rather than individual Frog to identify this pattern):
- Lily pads = bead positions
- Frogs = beads
- Shore = abacus frame edge

### Key Observations
1. **Leftmost frog determines total time** (like leftmost abacus bead)
2. **Gaps between frogs don't affect total time**
3. **Movement happens in one continuous block**