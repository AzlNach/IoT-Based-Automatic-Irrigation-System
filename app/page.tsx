'use client'

import { useEffect } from 'react'
import TableOfContents from '../components/TableOfContents'

export default function Home() {
  useEffect(() => {
    // Initialize Vanta.js background
    if (typeof window !== 'undefined' && (window as any).VANTA) {
      (window as any).VANTA.WAVES({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xd9c4a0,
        shininess: 30.00,
        waveHeight: 15.00,
        waveSpeed: 0.75,
        zoom: 0.65
      })
    }
  }, [])

  return (
    <>
      <TableOfContents />
      
      {/* Main Content */}
      <main className="main-content">

        {/* Hero Section */}
        <section className="hero-bg relative overflow-hidden" id="vanta-bg">
          <div className="absolute inset-0 bg-gradient-to-r from-earth-200/80 to-tech-100/60"></div>

          <div className="relative z-10 container mx-auto px-4 md:px-8 py-12 md:py-16">
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-screen">
              {/* Main Title & Abstract */}
              <div className="lg:col-span-2 flex flex-col justify-center">
                <div className="space-y-6">
                  <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-earth-900 leading-tight">
                    IoT-Based Automatic Irrigation System for Heat-Resistant Agriculture
                  </h1>

                  <p className="text-lg md:text-xl text-earth-700 max-w-3xl leading-relaxed">
                    A comprehensive smart irrigation solution designed for small-scale farmers facing extreme heat challenges, 
                    utilizing affordable ESP32 technology and AI-powered predictive algorithms to optimize water usage and crop survival.
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-earth-600">
                    <span className="flex items-center gap-2">
                      <i className="fas fa-microchip text-tech-600"></i>
                      ESP32 IoT Platform
                    </span>
                    <span className="flex items-center gap-2">
                      <i className="fas fa-thermometer-half text-orange-500"></i>
                      Heat-Smart Sensors
                    </span>
                    <span className="flex items-center gap-2">
                      <i className="fas fa-brain text-purple-600"></i>
                      AI Predictive System
                    </span>
                    <span className="flex items-center gap-2">
                      <i className="fas fa-mobile-alt text-blue-600"></i>
                      Mobile Dashboard
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-earth-200">
                  <h3 className="font-serif text-xl font-semibold text-earth-800 mb-4">Key Points</h3>
                  <ul className="space-y-3 text-sm text-earth-700">
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-green-600 mt-1"></i>
                      <span>Student budget-friendly ($33-$65)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-green-600 mt-1"></i>
                      <span>30-50% water savings guaranteed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-green-600 mt-1"></i>
                      <span>Real-time climate monitoring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-green-600 mt-1"></i>
                      <span>Automated heat stress response</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-green-600 mt-1"></i>
                      <span>Scalable for small farms (0.25+ acres)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-tech-500/10 backdrop-blur rounded-2xl p-6 border border-tech-200">
                  <h4 className="font-semibold text-tech-800 mb-2">Main Benefits</h4>
                  <p className="text-sm text-tech-700">
                    Reduces irrigation costs by up to 40% while increasing crop yields by 25-30% 
                    through precision watering and intelligent heat stress mitigation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}

        {/* Section 1: Overview */}
        <section id="overview" className="py-16 px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-serif text-4xl font-bold text-earth-900 mb-8">System Overview</h2>

            <div className="prose prose-lg max-w-none">
              <h3 className="font-serif text-2xl font-semibold text-earth-800 mb-4">Small-Scale Farmer Challenges</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-earth-200">
                  <h4 className="font-semibold text-earth-800 mb-3 flex items-center gap-2">
                    <i className="fas fa-sun text-orange-500"></i>
                    Rising Heat Stress
                  </h4>
                  <p className="text-earth-700 leading-relaxed">
                    Climate change has intensified heat waves, with temperatures exceeding 35°C (95°F) for extended periods. 
                    Traditional irrigation methods fail to respond quickly enough to prevent crop damage and water waste.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-earth-200">
                  <h4 className="font-semibold text-earth-800 mb-3 flex items-center gap-2">
                    <i className="fas fa-dollar-sign text-green-600"></i>
                    Limited Resources
                  </h4>
                  <p className="text-earth-700 leading-relaxed">
                    Small farmers often lack access to expensive smart farming technology. 
                    Water costs continue to rise while manual irrigation requires significant time and labor investment.
                  </p>
                </div>
              </div>

              <div className="bg-tech-50 rounded-xl p-8 mb-12 border border-tech-200">
                <h4 className="font-serif text-xl font-semibold text-tech-800 mb-4">IoT-Based Solution</h4>
                <p className="text-tech-700 leading-relaxed mb-4">
                  An automatic irrigation system based on IoT can be designed within a student project budget
                  by utilizing <strong className="text-tech-900">ESP32 microcontroller</strong>, affordable environmental sensors,
                  and open-source IoT platforms like Blynk
                  <a href="https://pdfs.semanticscholar.org/f425/37621a39480f19eceff5fe1b5920dc9da4c3.pdf" className="citation-link" target="_blank">[206]</a>.
                </p>
                <p className="text-tech-700 leading-relaxed">
                  The <em>&quot;Climate-Smart&quot;</em> approach integrates advanced technology with sustainable farming practices
                  to optimize water resource utilization
                  <a href="https://www.mdpi.com/1424-8220/25/4/1199" className="citation-link" target="_blank">[199]</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider container mx-auto max-w-4xl"></div>

        {/* Section 2: Architecture */}
        <section id="architecture" className="py-16 px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-serif text-4xl font-bold text-earth-900 mb-8">System Architecture and Components</h2>

            {/* System Architecture Diagram */}
            <div className="bg-white rounded-xl p-8 mb-12 shadow-sm border border-earth-200">
              <h3 className="font-serif text-2xl font-semibold text-earth-800 mb-6">System Architecture Diagram</h3>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-tech-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-seedling text-green-600 text-2xl"></i>
                  </div>
                  <h4 className="font-semibold text-earth-800 mb-2">Field</h4>
                  <p className="text-sm text-earth-600">Sensors & Actuators</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-tech-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-microchip text-tech-600 text-2xl"></i>
                  </div>
                  <h4 className="font-semibold text-earth-800 mb-2">Control</h4>
                  <p className="text-sm text-earth-600">ESP32</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-tech-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-cloud text-blue-600 text-2xl"></i>
                  </div>
                  <h4 className="font-semibold text-earth-800 mb-2">Cloud</h4>
                  <p className="text-sm text-earth-600">IoT Platform & AI</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-tech-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-mobile-alt text-purple-600 text-2xl"></i>
                  </div>
                  <h4 className="font-semibold text-earth-800 mb-2">Application</h4>
                  <p className="text-sm text-earth-600">Mobile Dashboard</p>
                </div>
              </div>

              <div className="border-t border-earth-200 pt-6">
                <div className="w-full h-64 bg-gradient-to-r from-tech-100 to-earth-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <i className="fas fa-project-diagram text-4xl text-tech-600 mb-4"></i>
                    <h4 className="text-lg font-semibold text-earth-800">IoT System Architecture</h4>
                    <p className="text-sm text-earth-600 mt-2">Field Sensors → ESP32 → Cloud Platform → Mobile App</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hardware Components */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-earth-200">
                <h4 className="font-serif text-xl font-semibold text-earth-800 mb-4 flex items-center gap-3">
                  <i className="fas fa-microchip text-tech-600"></i>
                  ESP32 Microcontroller
                </h4>
                <p className="text-earth-700 leading-relaxed mb-4">
                  ESP32 is chosen as the main brain because it has <strong>built-in Wi-Fi and Bluetooth</strong>,
                  dual-core performance, and low power consumption
                  <a href="https://pdfs.semanticscholar.org/f425/37621a39480f19eceff5fe1b5920dc9da4c3.pdf" className="citation-link" target="_blank">[206]</a>.
                </p>
                <div className="bg-earth-50 rounded-lg p-4">
                  <h5 className="font-semibold text-earth-800 mb-2">Advantages:</h5>
                  <ul className="text-sm text-earth-700 space-y-1">
                    <li>• Built-in wireless connectivity</li>
                    <li>• Low cost ($10-15)</li>
                    <li>• Multiple GPIO pins for sensors</li>
                    <li>• Deep sleep mode for battery efficiency</li>
                    <li>• Arduino IDE compatibility</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-earth-200">
                <h4 className="font-serif text-xl font-semibold text-earth-800 mb-4 flex items-center gap-3">
                  <i className="fas fa-thermometer-half text-orange-500"></i>
                  Heat-Smart Sensors
                </h4>

                <div className="space-y-4">
                  <div className="border-l-4 border-tech-300 pl-4">
                    <h5 className="font-semibold text-tech-800 text-sm">DHT22 Temperature & Humidity</h5>
                    <p className="text-xs text-earth-600">Monitors air conditions and heat stress indicators</p>
                  </div>

                  <div className="border-l-4 border-earth-300 pl-4">
                    <h5 className="font-semibold text-earth-800 text-sm">Soil Moisture Sensor</h5>
                    <p className="text-xs text-earth-600">Measures soil water content at root level</p>
                  </div>

                  <div className="border-l-4 border-yellow-300 pl-4">
                    <h5 className="font-semibold text-earth-800 text-sm">Light Intensity (LDR)</h5>
                    <p className="text-xs text-earth-600">Detects UV intensity and solar radiation levels</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Software Components */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-earth-200">
              <h4 className="font-serif text-2xl font-semibold text-earth-800 mb-6">Software Components</h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-earth-800 mb-3 flex items-center gap-2">
                    <i className="fas fa-mobile-alt text-tech-600"></i>
                    Blynk IoT Platform
                  </h5>
                  <p className="text-earth-700 text-sm leading-relaxed mb-3">
                    Free cloud platform that provides mobile app interface, data logging, 
                    and remote control capabilities without requiring complex server setup.
                  </p>
                  <div className="bg-tech-50 rounded-lg p-3">
                    <p className="text-xs text-tech-700"><strong>Cost:</strong> Free tier (sufficient for student projects)</p>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-earth-800 mb-3 flex items-center gap-2">
                    <i className="fas fa-brain text-purple-600"></i>
                    AI Prediction Algorithm
                  </h5>
                  <p className="text-earth-700 text-sm leading-relaxed mb-3">
                    Simple machine learning model running on ESP32 that learns irrigation patterns 
                    based on historical weather data and crop response.
                  </p>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <p className="text-xs text-purple-700"><strong>Implementation:</strong> TensorFlow Lite for Microcontrollers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider container mx-auto max-w-4xl"></div>

        {/* Section 3: Features */}
        <section id="features" className="py-16 px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-serif text-4xl font-bold text-earth-900 mb-8">Main System Functions and Features</h2>

            <div className="space-y-12">

              {/* Heat-Smart Sensors */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-earth-200">
                <h3 className="font-serif text-2xl font-semibold text-earth-800 mb-6 flex items-center gap-3">
                  <i className="fas fa-thermometer-full text-red-500"></i>
                  Heat-Smart Sensors: Environmental Monitoring
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-earth-800 mb-3">Real-time Climate Tracking</h4>
                    <p className="text-earth-700 text-sm leading-relaxed mb-4">
                      The system continuously monitors temperature, humidity, soil moisture, and light intensity. 
                      When temperature exceeds 32°C (90°F) or soil moisture drops below critical levels, 
                      automatic irrigation is triggered.
                    </p>
                    <div className="bg-red-50 rounded-lg p-4">
                      <h5 className="font-semibold text-red-800 text-sm mb-2">Heat Stress Indicators:</h5>
                      <ul className="text-xs text-red-700 space-y-1">
                        <li>• Temperature &gt; 32°C (90°F)</li>
                        <li>• Relative humidity &lt; 40%</li>
                        <li>• Soil moisture &lt; 30%</li>
                        <li>• High UV index readings</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-earth-800 mb-3">Sensor Network Architecture</h4>
                    <p className="text-earth-700 text-sm leading-relaxed mb-4">
                      Multiple sensor nodes can be deployed across larger fields, 
                      creating a mesh network that provides comprehensive coverage 
                      and redundancy for critical measurements.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-800 text-sm mb-2">Coverage Area:</h5>
                      <ul className="text-xs text-blue-700 space-y-1">
                        <li>• Single node: 50m radius</li>
                        <li>• Mesh network: Unlimited expansion</li>
                        <li>• Data update: Every 15 minutes</li>
                        <li>• Emergency alerts: Real-time</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Predictive Irrigation */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-earth-200">
                <h3 className="font-serif text-2xl font-semibold text-earth-800 mb-6 flex items-center gap-3">
                  <i className="fas fa-brain text-purple-600"></i>
                  AI-Based Predictive Irrigation
                </h3>

                <div className="mb-6">
                  <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                    <p className="text-purple-700 leading-relaxed">
                      The AI system learns from historical data to predict optimal watering schedules. 
                      It considers weather forecasts, soil conditions, and plant growth stages to determine 
                      the best irrigation timing and duration, reducing water waste by up to 40%.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-cloud-sun text-blue-600 text-2xl"></i>
                    </div>
                    <h4 className="font-semibold text-earth-800 mb-2">Weather Integration</h4>
                    <p className="text-sm text-earth-700">
                      Fetches 7-day weather forecasts to adjust irrigation schedules proactively
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-chart-line text-green-600 text-2xl"></i>
                    </div>
                    <h4 className="font-semibold text-earth-800 mb-2">Learning Algorithm</h4>
                    <p className="text-sm text-earth-700">
                      Adapts to local conditions and improves accuracy over time with usage
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-seedling text-orange-600 text-2xl"></i>
                    </div>
                    <h4 className="font-semibold text-earth-800 mb-2">Crop-Specific</h4>
                    <p className="text-sm text-earth-700">
                      Customizable parameters for different crops and growth stages
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Dashboard */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-earth-200">
                <h3 className="font-serif text-2xl font-semibold text-earth-800 mb-6 flex items-center gap-3">
                  <i className="fas fa-mobile-alt text-blue-600"></i>
                  Mobile Climate Dashboard
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-earth-800 mb-3">Real-Time Monitoring</h4>
                    <p className="text-earth-700 text-sm leading-relaxed mb-4">
                      The Blynk mobile app provides a user-friendly interface showing live sensor data, 
                      irrigation status, and system health. Farmers can monitor their fields from anywhere 
                      with internet connection.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-800 text-sm mb-2">Dashboard Features:</h5>
                      <ul className="text-xs text-blue-700 space-y-1">
                        <li>• Live sensor readings</li>
                        <li>• Historical data charts</li>
                        <li>• Manual override controls</li>
                        <li>• Alert notifications</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-earth-800 mb-3">Remote Control Capabilities</h4>
                    <p className="text-earth-700 text-sm leading-relaxed mb-4">
                      Farmers can manually trigger irrigation, adjust schedules, and configure system settings 
                      remotely. Emergency stop functions are available for immediate system shutdown.
                    </p>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h5 className="font-semibold text-green-800 text-sm mb-2">Control Options:</h5>
                      <ul className="text-xs text-green-700 space-y-1">
                        <li>• Start/stop irrigation</li>
                        <li>• Schedule adjustments</li>
                        <li>• Threshold modifications</li>
                        <li>• System diagnostics</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Automated Response */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-earth-200">
                <h3 className="font-serif text-2xl font-semibold text-earth-800 mb-6 flex items-center gap-3">
                  <i className="fas fa-robot text-green-600"></i>
                  Automated Response System
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-exclamation-triangle text-red-600 text-2xl"></i>
                    </div>
                    <h4 className="font-semibold text-earth-800 mb-2">Emergency Response</h4>
                    <p className="text-sm text-earth-700">
                      Immediate irrigation activation when extreme heat conditions are detected
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-clock text-blue-600 text-2xl"></i>
                    </div>
                    <h4 className="font-semibold text-earth-800 mb-2">Scheduled Irrigation</h4>
                    <p className="text-sm text-earth-700">
                      Automated daily watering based on crop needs and environmental conditions
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-shield-alt text-purple-600 text-2xl"></i>
                    </div>
                    <h4 className="font-semibold text-earth-800 mb-2">System Protection</h4>
                    <p className="text-sm text-earth-700">
                      Automatic shutdown during sensor failures or water system malfunctions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider container mx-auto max-w-4xl"></div>

        {/* Section 4: Implementation */}
        <section id="implementation" className="py-16 px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-serif text-4xl font-bold text-earth-900 mb-8">System Implementation and Optimization</h2>

            {/* Installation Guide */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-earth-200 mb-12">
              <h3 className="font-serif text-2xl font-semibold text-earth-800 mb-6">Field Installation</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-earth-800 mb-4 flex items-center gap-2">
                    <i className="fas fa-tools text-orange-600"></i>
                    Hardware Setup
                  </h4>

                  <div className="space-y-4">
                    <div className="border-l-4 border-tech-300 pl-4">
                      <h5 className="font-semibold text-tech-800 text-sm">1. Control Box Installation</h5>
                      <p className="text-xs text-earth-600">Weatherproof enclosure for ESP32 and relay modules</p>
                    </div>
                    <div className="border-l-4 border-green-300 pl-4">
                      <h5 className="font-semibold text-green-800 text-sm">2. Sensor Deployment</h5>
                      <p className="text-xs text-earth-600">Strategic placement throughout growing area</p>
                    </div>
                    <div className="border-l-4 border-blue-300 pl-4">
                      <h5 className="font-semibold text-blue-800 text-sm">3. Drip Line Connection</h5>
                      <p className="text-xs text-earth-600">Integration with existing irrigation infrastructure</p>
                    </div>
                    <div className="border-l-4 border-purple-300 pl-4">
                      <h5 className="font-semibold text-purple-800 text-sm">4. Power Supply Setup</h5>
                      <p className="text-xs text-earth-600">Solar panel or AC adapter configuration</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-earth-800 mb-4 flex items-center gap-2">
                    <i className="fas fa-water text-blue-600"></i>
                    Drip Irrigation Network
                  </h4>

                  <img src="https://kimi-web-img.moonshot.cn/img/sunpevece.co.id/cd3b5a71973afd21635cbc7cbb8eccb6ee8b923a.jpg" alt="Drip irrigation pipe installation in agriculture" className="w-full rounded-lg mb-4" />

                  <div className="bg-earth-50 rounded-lg p-4">
                    <h5 className="font-semibold text-earth-800 text-sm mb-2">Installation Tips:</h5>
                    <ul className="text-xs text-earth-700 space-y-1">
                      <li>• Use 16mm main line for small plots</li>
                      <li>• Install pressure compensating emitters</li>
                      <li>• Bury lines 5-10cm deep</li>
                      <li>• Include filtration system</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Water Optimization */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-earth-200 mb-12">
              <h3 className="font-serif text-2xl font-semibold text-earth-800 mb-6">Water Usage Optimization</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-earth-800 mb-4">Significant Water Savings</h4>
                  <p className="text-earth-700 leading-relaxed mb-4">
                    Precision irrigation combined with soil moisture monitoring reduces water consumption 
                    by 30-50% compared to traditional flood irrigation methods. The system delivers water 
                    directly to root zones only when needed.
                  </p>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h5 className="font-semibold text-blue-800 text-sm mb-2">Water Efficiency Metrics:</h5>
                    <ul className="text-xs text-blue-700 space-y-1">
                      <li>• 90-95% irrigation efficiency vs 60% flood irrigation</li>
                      <li>• Reduces evaporation losses by 80%</li>
                      <li>• Prevents runoff and nutrient leaching</li>
                      <li>• Maintains optimal soil moisture levels</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <img src="https://kimi-web-img.moonshot.cn/img/www.kernturfsupply.com/b406851dcd96aa1c6e78176a1b0ce9f48eeee873.jpg" alt="Water-efficient drip irrigation system in agriculture" className="w-full rounded-lg mb-4" />

                  <div className="bg-green-50 rounded-lg p-4">
                    <h5 className="font-semibold text-green-800 text-sm mb-2">Environmental Benefits:</h5>
                    <ul className="text-xs text-green-700 space-y-1">
                      <li>• Reduced groundwater depletion</li>
                      <li>• Lower energy costs for pumping</li>
                      <li>• Minimized soil erosion</li>
                      <li>• Improved crop health and yield</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Integration with Rainwater Harvesting */}
              <div className="bg-tech-50 rounded-lg p-6 border border-tech-200">
                <h4 className="font-semibold text-tech-800 mb-3 flex items-center gap-2">
                  <i className="fas fa-cloud-rain text-tech-600"></i>
                  Rainwater Harvesting Integration
                </h4>
                <p className="text-tech-700 leading-relaxed">
                  The system can be integrated with rainwater collection tanks. 
                  Water level sensors monitor availability, and the system automatically switches 
                  to rainwater when available, reducing dependence on wells or rivers.
                </p>
              </div>
            </div>

            {/* Heat Stress Mitigation */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-earth-200">
              <h3 className="font-serif text-2xl font-semibold text-earth-800 mb-6">Extreme Heat Risk Mitigation</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-earth-800 mb-4 flex items-center gap-2">
                    <i className="fas fa-thermometer-full text-red-500"></i>
                    Heat Stress Prevention
                  </h4>
                  <p className="text-earth-700 leading-relaxed mb-4">
                    When temperatures exceed critical thresholds (&gt;35°C), the system automatically 
                    increases irrigation frequency and duration. Micro-misting can be activated 
                    to create evaporative cooling around sensitive crops.
                  </p>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h5 className="font-semibold text-blue-800 text-sm mb-2">Cooling Strategies:</h5>
                    <ul className="text-xs text-blue-700 space-y-1">
                      <li>• Increased irrigation frequency</li>
                      <li>• Early morning watering (4-6 AM)</li>
                      <li>• Soil mulching recommendations</li>
                      <li>• Shade structure alerts</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-earth-800 mb-4 flex items-center gap-2">
                    <i className="fas fa-shield-alt text-green-500"></i>
                    Crop Protection Protocols
                  </h4>
                  <p className="text-earth-700 leading-relaxed mb-4">
                    The system implements multi-layer protection protocols including soil moisture 
                    maintenance, canopy temperature monitoring, and stress indicator tracking 
                    to prevent permanent crop damage during heat waves.
                  </p>

                  <div className="bg-green-50 rounded-lg p-4">
                    <h5 className="font-semibold text-green-800 text-sm mb-2">Protection Features:</h5>
                    <ul className="text-xs text-green-700 space-y-1">
                      <li>• Real-time stress monitoring</li>
                      <li>• Emergency irrigation protocols</li>
                      <li>• Growth stage-specific responses</li>
                      <li>• Recovery optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider container mx-auto max-w-4xl"></div>

        {/* Section 5: Cost Estimation */}
        <section id="feasibility" className="py-16 px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-serif text-4xl font-bold text-earth-900 mb-8">Cost Estimation and Student Project Feasibility</h2>

            {/* Cost Breakdown Table */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-earth-200 mb-12">
              <h3 className="font-serif text-2xl font-semibold text-earth-800 mb-6">Component Cost Breakdown</h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-earth-200">
                      <th className="text-left py-3 px-4 font-semibold text-earth-800">Component</th>
                      <th className="text-left py-3 px-4 font-semibold text-earth-800">Description</th>
                      <th className="text-right py-3 px-4 font-semibold text-earth-800">Unit Cost</th>
                      <th className="text-right py-3 px-4 font-semibold text-earth-800">Quantity</th>
                      <th className="text-right py-3 px-4 font-semibold text-earth-800">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-earth-100">
                    <tr>
                      <td className="py-3 px-4">ESP32 DevKit</td>
                      <td className="py-3 px-4">Main microcontroller</td>
                      <td className="py-3 px-4 text-right">$12</td>
                      <td className="py-3 px-4 text-right">1</td>
                      <td className="py-3 px-4 text-right font-semibold">$12</td>
                    </tr>
                    <tr className="bg-earth-25">
                      <td className="py-3 px-4">DHT22 Sensor</td>
                      <td className="py-3 px-4">Temperature & humidity</td>
                      <td className="py-3 px-4 text-right">$8</td>
                      <td className="py-3 px-4 text-right">2</td>
                      <td className="py-3 px-4 text-right font-semibold">$16</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Soil Moisture Sensor</td>
                      <td className="py-3 px-4">Capacitive type</td>
                      <td className="py-3 px-4 text-right">$5</td>
                      <td className="py-3 px-4 text-right">3</td>
                      <td className="py-3 px-4 text-right font-semibold">$15</td>
                    </tr>
                    <tr className="bg-earth-25">
                      <td className="py-3 px-4">Relay Module</td>
                      <td className="py-3 px-4">4-channel for valve control</td>
                      <td className="py-3 px-4 text-right">$6</td>
                      <td className="py-3 px-4 text-right">1</td>
                      <td className="py-3 px-4 text-right font-semibold">$6</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Solenoid Valves</td>
                      <td className="py-3 px-4">12V DC irrigation valves</td>
                      <td className="py-3 px-4 text-right">$8</td>
                      <td className="py-3 px-4 text-right">2</td>
                      <td className="py-3 px-4 text-right font-semibold">$16</td>
                    </tr>
                    <tr className="bg-earth-25">
                      <td className="py-3 px-4">Power Supply</td>
                      <td className="py-3 px-4">12V adapter or solar panel</td>
                      <td className="py-3 px-4 text-right">$10</td>
                      <td className="py-3 px-4 text-right">1</td>
                      <td className="py-3 px-4 text-right font-semibold">$10</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Enclosure & Wiring</td>
                      <td className="py-3 px-4">Weatherproof case, cables</td>
                      <td className="py-3 px-4 text-right">$8</td>
                      <td className="py-3 px-4 text-right">1</td>
                      <td className="py-3 px-4 text-right font-semibold">$8</td>
                    </tr>
                    <tr className="bg-tech-50 font-semibold">
                      <td className="py-4 px-4" colSpan={4}>Total System Cost</td>
                      <td className="py-4 px-4 text-right text-lg">$83</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Scalability Example */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-earth-200 mb-12">
              <h3 className="font-serif text-2xl font-semibold text-earth-800 mb-6">System Scalability</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-earth-800 mb-4">Example: 0.25 Acre Farm</h4>
                  <p className="text-earth-700 leading-relaxed mb-4">
                    For a typical small-scale vegetable farm (0.25 acres), the complete system 
                    including drip irrigation infrastructure costs approximately $150-200 total, 
                    with expected payback period of 6-8 months through water and labor savings.
                  </p>

                  <div className="bg-earth-50 rounded-lg p-4">
                    <h5 className="font-semibold text-earth-800 text-sm mb-2">ROI Calculation:</h5>
                    <ul className="text-xs text-earth-700 space-y-1">
                      <li>• Initial investment: $200</li>
                      <li>• Monthly water savings: $15-25</li>
                      <li>• Labor cost reduction: $10-15/month</li>
                      <li>• Increased yield value: $20-30/month</li>
                      <li>• Payback period: 6-8 months</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <img src="https://kimi-web-img.moonshot.cn/img/sunpevece.co.id/cd3b5a71973afd21635cbc7cbb8eccb6ee8b923a.jpg" alt="Small scale farm irrigation system" className="w-full rounded-lg mb-4" />

                  <div className="bg-tech-50 rounded-lg p-4">
                    <h5 className="font-semibold text-tech-800 text-sm mb-2">Expansion Options:</h5>
                    <ul className="text-xs text-tech-700 space-y-1">
                      <li>• Modular sensor additions: $15 each</li>
                      <li>• Additional zone control: $25 per zone</li>
                      <li>• Weather station upgrade: $40</li>
                      <li>• Solar power system: $60-80</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Economic and Environmental Benefits */}
            <div className="bg-gradient-to-r from-earth-50 to-tech-50 rounded-xl p-8 border border-earth-200">
              <h3 className="font-serif text-2xl font-semibold text-earth-800 mb-6">Economic and Environmental Benefits</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-dollar-sign text-green-600 text-2xl"></i>
                  </div>
                  <h4 className="font-semibold text-earth-800 mb-2">Cost Savings</h4>
                  <p className="text-sm text-earth-700">
                    Reduces irrigation costs by 40-60% through optimized water usage and 
                    elimination of manual labor requirements for daily watering tasks.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-chart-line text-blue-600 text-2xl"></i>
                  </div>
                  <h4 className="font-semibold text-earth-800 mb-2">Yield Improvement</h4>
                  <p className="text-sm text-earth-700">
                    Increases crop yields by 25-35% through consistent soil moisture 
                    and reduced plant stress during critical growth periods.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-leaf text-green-600 text-2xl"></i>
                  </div>
                  <h4 className="font-semibold text-earth-800 mb-2">Sustainability</h4>
                  <p className="text-sm text-earth-700">
                    Promotes sustainable agriculture through water conservation, 
                    reduced chemical runoff, and improved soil health management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-earth-800 text-earth-100 py-12 px-8">
          <div className="container mx-auto max-w-4xl text-center">
            <h3 className="font-serif text-2xl font-semibold mb-4">IoT-Based Automatic Irrigation System</h3>
            <p className="text-earth-300 mb-6">
              Smart solution for heat-resistant agriculture with affordable and easy-to-implement technology.
            </p>

            <div className="flex justify-center space-x-6 text-sm text-earth-400">
              <span className="flex items-center gap-2">
                <i className="fas fa-microchip"></i>
                ESP32 Technology
              </span>
              <span className="flex items-center gap-2">
                <i className="fas fa-brain"></i>
                AI Powered
              </span>
              <span className="flex items-center gap-2">
                <i className="fas fa-mobile-alt"></i>
                Mobile Control
              </span>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
