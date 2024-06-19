import random

def chaotic_car(steps):
    position = 0 # Start at 0
    
    for _ in range(steps):
        direction = random.choice([-1, 1] )#choose random direction
        
        position += direction # move car in that direction
        
        print("Car position:", position)
        
chaotic_car(5) # Move car 5 times