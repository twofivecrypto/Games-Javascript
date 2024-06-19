import random
def chaotic_car(steps, max_position):
    position = 0 #start at 0
    
    for _ in range(steps):
        direction = random.choice([-1, 1]) #choose random direction
        
        position += direction #move car in said direction
        
        #check if car is too far left or right
        if position < -max_position or position > max_position:
            print("Oops, car hit the edge, lets turn around!")
            position = 0
            
        print("car position:", position)
        
# move the car for 10 steps, and if it goes beyond position
chaotic_car(10, 5)