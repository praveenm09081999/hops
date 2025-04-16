# Hops

# Hops

## Problem Description
A family of frogs in a pond are traveling towards dry land to hibernate by hopping across a trail of `N` lily pads, numbered from `1` to `N` in order. 

There are `F` frogs, numbered from `1` to `F`. Frog `i` is currently on lily pad `P[i]`. No two frogs share the same lily pad initially. Lily pad `N` is right next to the shore, and none of the frogs start on pad `N`.

### Movement Rules:
1. Each second, **one frog** may hop toward the shore (higher-numbered pads)
2. When a frog hops:
   - Moves to the nearest unoccupied lily pad toward `N`
   - Can jump over other frogs on intermediate pads
   - If reaches pad `N`, exits to shore immediately
3. Frogs cannot hop simultaneously

### Objective:
Determine the **minimum number of seconds** required for all frogs to reach the shore when they cooperate optimally.

## Constraints
- `2 ≤ N ≤ 10^12` (Number of lily pads)
- `1 ≤ F ≤ 500,000` (Number of frogs)
- `1 ≤ P[i] ≤ N-1` (Initial positions)
- All `P[i]` are distinct

## Abacus Analogy Insight
The solution mirrors how abacus beads slide along rods (focus on Frog's position rather than the individual Frog to identify this pattern):
- Lily pads = bead positions
- Frogs = beads
- Shore = abacus frame edge

### Key Observations
1. **Leftmost frog determines total time** (like leftmost abacus bead)
2. **Gaps between frogs don't affect total time**
3. **Movement happens in one continuous block**
