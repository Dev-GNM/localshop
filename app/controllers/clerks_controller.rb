class ClerksController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_error
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
   
  
     

      def index
         render json: Clerk.all,status: :ok
      end

      def show
          clerk = find_clerk
          render json: clerk, status: :ok
      end

       def update
          clerk = find_clerk
          Clerk.update(clerk_params)
          render json: clerk
      end

      def create
          clerk = Clerk.create(clerk_params)
          render json: clerk, status: :created
      end

      def destroy
          clerk = find_clerk
          clerk.destroy
          head :no_content
      end


      private
      def render_error
          render json: { error: "Clerk not found" }, status: :not_found
       end

      def find_clerk
           Clerk.find(params[:id])
      end

      def clerk_params
          params.permit(:full_name, :email, :password, :admin_id)
      end

      def render_unprocessable_entity_response(invalid)
          render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
      end

      def authorize
      return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :client_id
      end
end
