import random

def chaotic_car(steps, max_position, num_obstacles):
    positions = []
    position = 0 # Starts at 0
    
    obstacles = random.sample(range(-max_position, max_position + 1), num_obstacles)
    # Generate a list of random obstacle position within the allowed range
    
    for _ in range(steps):
        
        direction = random.choice([-1, 1]) #choose a random direction
        
        position += direction # Move car in that direction
        
        # Check if the car is too far to the left or right
        if position < -max_position or position > max_position:
            track_car = position
            print(track_car)
            print("Oops, car hit the edge. Turning around!")
            position = 0 # Turn the car around by settings its position
            
        # Check for obstacles
        if position in obstacles:
            print("Oh no! car hit an obstacle, going back to the start!!")
            position = 0 # Go back to the start if an obstacle is hit
            
        positions.append(position)
        
        print("Car position:", position)
        
    return positions
        
# Move the car for 15 steps, with obstacles placed randomly within position -3 to 3
chaotic_car(15, 3, 3)