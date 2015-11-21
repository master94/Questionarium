class AnswersController < ApplicationController
  before_action :set_answer, only: [:show, :update, :destroy]
  before_action :authenticate_user!, only: [:create, :update, :destroy]

  # GET /answers
  # GET /answers.json
  def index
    @answers = Answer.all

    render json: @answers
  end

  # GET /answers/1
  # GET /answers/1.json
  def show
    render json: @answer
  end

  # POST /answers
  # POST /answers.json
  def create
    @answer = Answer.new(answer_params)

    if @answer.save
      render json: @answer, status: :created, location: @answer
    else
      render json: @answer.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /answers/1
  # PATCH/PUT /answers/1.json
  def update
    @answer = Answer.find(params[:id])

    if @answer.update(answer_params)
      head :no_content
    else
      render json: @answer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /answers/1
  # DELETE /answers/1.json
  def destroy
    @answer.destroy

    head :no_content
  end

  private

    def set_answer
      @answer = Answer.find(params[:id])
    end

    def answer_params
      params[:answer]
    end
end
