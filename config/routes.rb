Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show, :edit]
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:show, :index, :create, :destroy, :update] do
      collection do
        get :search, to: 'listings#search', as: 'search'
      end
    end
    resources :saves, only: [:create, :destroy, :index]
  end


  root to: 'static_pages#root'
end
