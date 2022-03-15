from Graph_search import bfs, dfs
from VC_metro import vc_metro
from VC_landmarks import vc_landmarks
from Landmark_choices import landmark_choices

landmark_string = ''
for letter, landmark in landmark_choices.items():
    landmark_string += f'{letter} - {'