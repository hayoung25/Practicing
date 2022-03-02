from linked_list import Node, LinkedList
from blossom_lib import flower_definitions

class HashMap:
    def __init__(self, size):
        self.array_size = size
        self.array = [LinkedList() for i in range(size)]

    # Changing key to hash value 
    def hash(self, key):
        key_byte = key.encode()
        hash_code = sum(key_byte)
        return hash_code

    # Using hash value and change it to index value
    def compress(self, hash_code):
        return hash_code % self.array_size 

    # Assigning new key-value hash map
    def assign(self, key, value):
        hash_code = self.hash(key)
        array_index = self.compress(hash_code)
        
        # Making key-value to a Node
        payload = Node([key, value])
        list_at_array = self.array[array_index]

        # Find if there is collision in the space of the index 
        for item in list_at_array:
            if item[0] == key:
                # If so, just override the value again
                item[1] = value
        # If not, add the Node
        list_at_array.insert(payload)    

    # Getting value by inserting key
    def retrieve(self, key):
        array_index = self.compress(self.hash(key))
        list_at_index = self.array[array_index]

        # Checking all the Nodes within the index space
        for item in list_at_index:
            if item[0] == key:

                # Found it! return the value attaching to the key
                return item[1]

        # There is no key corresponding the inserted key        
        return None

# Testing
blossom = HashMap(len(flower_definitions))
for flower in flower_definitions:
    blossom.assign(flower[0], flower[1])
daisy = blossom.retrieve('daisy')    
print(daisy)
