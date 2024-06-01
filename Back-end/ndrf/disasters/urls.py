from django.urls import path, include
from . import views

urlpatterns = [
    path('disasters/',views.DisasterList.as_view()),
    path('disasters/<int:disaster_id>',views.DisasterDetails.as_view()),
    path('disasters/<int:disaster_id>/incidents',views.IncidentList.as_view()),
    path('disasters/<diaster_id>/incidents/<incident_id>',views.IncidentDetails.as_view()),
    path('disasters/<disaster_id>/weather', views.Weather.as_view())
]