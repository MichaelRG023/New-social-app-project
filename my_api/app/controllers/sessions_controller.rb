class SessionsController < ApplicationController

def create 

    user_to_find_to_login = User.find_by( username: params[:username])


    if user_to_find_to_login 

    
      if user_to_find_to_login.authenticate( params[:password_digest] )

         render json: user_to_find_to_login

      else 
        render json: {error:"Incorrect Password, check password again"}

        if user_to_find_to_login.authenticate(params[:email])

          render json: user_to_find_to_login

        else 

          render json:{error:"Incorrect Email, make sure to have @gmail.cam"}
        end 

      end

    else 
      render json:{error:"Username or Password or Email  does not match"}
    end



    end 



    


end
