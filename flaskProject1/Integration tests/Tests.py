from selenium import webdriver
# from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
import time

PATH = '/home/vpaligorov/Desktop/chromedriver_linux64/chromedriver'
driver = webdriver.Chrome(PATH)
driver.get("http://127.0.0.1:5000")

    
def RegisterCheck():
    register = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, "register")))
    register.click()
    fullname = driver.find_element_by_name("fullname")
    fullname.send_keys("1")
    email = driver.find_element_by_name("email")
    email.send_keys("1@gmail.com")
    password = driver.find_element_by_name('password1')
    password.send_keys("1")
    password2 = driver.find_element_by_name("password2")
    password2.send_keys("1")
    driver.quit()
    driver.find_element_by_name("button").click()



def LoginCheck():
    login = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, "login")))
    login.click()
    email = driver.find_element_by_name("email")
    email.send_keys("1@gmail.com")
    username = driver.find_element_by_name("username")
    username.send_keys("1")
    password = driver.find_element_by_name("password")
    password.send_keys("1")
    driver.find_element_by_name("button").click()

    


# driver.get("http://127.0.0.1:5000/OverallDB1")
print(driver.title)
# login = driver.find_element_by_id("logout").click()
def FooterCheck():
    Facebook = WebDriverWait(driver, 60).until(EC.element_to_be_clickable((By.ID, "Facebook")))
    Facebook.click()

    Twitter = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, "Twitter")))
    Twitter.click()

    Google = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, "Google")))
    Google.click()

    Instagram = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, "Instagram")))
    Instagram.click()

    LinkedIn = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, "Linkedin")))
    LinkedIn.click()

    GitHub = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, "GitHub")))
    GitHub.click()


RegisterCheck()

time.sleep(5)
driver.quit()
