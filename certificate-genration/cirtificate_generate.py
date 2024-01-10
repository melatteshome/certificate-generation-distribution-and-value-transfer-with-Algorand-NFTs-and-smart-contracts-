import cv2
import requests
import numpy as np
from openai import OpenAI
from dotenv import load_dotenv
import os


load_dotenv()
api_key = os.getenv('OPENAI_API_KEY')


client = OpenAI(api_key= api_key)

def generate_backgroumd(prompt):
    response = client.images.generate(
        model="dall-e-3",
        prompt=prompt,
        size="1024x1024",
        quality="standard",
        n=1,
    )
    image_irl = response.data[0].url
    # download_and_save_image(image_irl, '../generated_images/')
    print(image_irl)
    

def edit_generated_imate(image_ur):
    respone = client.images.edit(
        model="dall-e-3",
        image=open("sunlit_lounge.png", "rb"),
        mask=open("mask.png", "rb"),
        prompt="A sunlit indoor lounge area with a pool containing a flamingo",
        n=1,
        size="1024x1024"
    )

def download_and_save_image(url, filePath):
    response = requests.get(url=url)
    if response.status_code == 200:
        with open(filePath,)as file:
            file.write(response.content)
        print('Image downloaded and saved successfully.')
    else:
        print('image download faild')

prompt = "Generate a certificate background with plain design, that conatains a title that says certificate of compeletion, at the bottom it two has empty dashes , between those two dashes put an empty space for company logo"
certificate_background = generate_backgroumd(prompt)


def edit_generated_certificate():
    certificate = cv2.imread('certificate-genration/generated_images/generated_image.png')
    footer_logo=cv2.imread('certificate-genration/generated_images/footer_logo.png')
    header_logo =cv2.imread('certificate-genration/generated_images/header_logo.png')


    # Add full name and signature
    first_name = "Melat"
    last_name ="Teshome"
    sign = 'MTADESSE'
    cv2.putText(certificate, first_name, (662, 790),cv2.FONT_HERSHEY_SIMPLEX, 0.5,(0,0,0),2)
    cv2.putText(certificate, last_name, (664, 822), cv2.FONT_HERSHEY_SIMPLEX, 0.5,(0,0,0),2)
    cv2.putText(certificate, sign, (248, 789), cv2.FONT_HERSHEY_SIMPLEX, 0.5,(0,0,0),2)

    positionl1_x = 458 
    positionl1_y = 143 

    positionl2_x = 460
    positionl2_y = 771



    certificate[positionl1_y:positionl1_y+header_logo.shape[0], positionl1_x:positionl1_x+header_logo.shape[1]] = header_logo
    certificate[positionl2_y:positionl2_y+footer_logo.shape[0], positionl2_x:positionl2_x+footer_logo.shape[1]] = footer_logo


    # Display or save the final certificate image'
    cv2.imwrite('certificate-genration/generated_images/modified_image.png', certificate)
    cv2.imshow("Certificate", certificate)
    cv2.waitKey(0)
    cv2.destroyAllWindows()