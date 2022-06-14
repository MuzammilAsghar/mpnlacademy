<template>
<nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">
              <i class="mdi mdi-grid-large menu-icon"></i>
              <span class="menu-title">Dashboard</span>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/profile">
              <i class="mdi mdi-grid-large menu-icon"></i>
              <span class="menu-title">Profile</span>
            </NuxtLink>
          </li>
          <li class="nav-item nav-category">Exams</li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/exams">
              <i class="menu-icon mdi mdi-floor-plan"></i>
              <span class="menu-title">All Exams</span>
            </NuxtLink>
          </li>
          <li class="nav-item">
          <NuxtLink class="nav-link" to="/add-exam">
              <i class="menu-icon mdi mdi-floor-plan"></i>
              <span class="menu-title">Add Exam</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
</template>