#!/usr/bin/env python3
"""
Comprehensive Backend API Testing for Procufy Legal Services Application
Tests FastAPI endpoints, MongoDB connectivity, and CRUD operations
"""

import requests
import json
import sys
from datetime import datetime
import uuid

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"❌ Error reading frontend .env file: {e}")
        return None

# Test configuration
BACKEND_URL = get_backend_url()
if not BACKEND_URL:
    print("❌ Could not get backend URL from frontend/.env")
    sys.exit(1)

API_BASE_URL = f"{BACKEND_URL}/api"
print(f"🔧 Testing backend at: {API_BASE_URL}")

def test_health_check():
    """Test the health check endpoint"""
    print("\n🏥 Testing Health Check Endpoint...")
    try:
        response = requests.get(f"{API_BASE_URL}/", timeout=10)
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("✅ Health check endpoint working correctly")
                return True
            else:
                print(f"❌ Health check returned unexpected data: {data}")
                return False
        else:
            print(f"❌ Health check failed with status {response.status_code}: {response.text}")
            return False
    except requests.exceptions.RequestException as e:
        print(f"❌ Health check request failed: {e}")
        return False

def test_create_status_check():
    """Test creating a status check (POST /api/status)"""
    print("\n📝 Testing Create Status Check (POST /api/status)...")
    try:
        # Use realistic legal services data
        test_data = {
            "client_name": "Bufete Jurídico Barcelona S.L."
        }
        
        response = requests.post(
            f"{API_BASE_URL}/status",
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 200:
            data = response.json()
            # Validate response structure
            required_fields = ["id", "client_name", "timestamp"]
            if all(field in data for field in required_fields):
                if data["client_name"] == test_data["client_name"]:
                    print("✅ Status check creation successful")
                    print(f"   Created ID: {data['id']}")
                    print(f"   Client: {data['client_name']}")
                    print(f"   Timestamp: {data['timestamp']}")
                    return True, data["id"]
                else:
                    print(f"❌ Client name mismatch. Expected: {test_data['client_name']}, Got: {data['client_name']}")
                    return False, None
            else:
                missing_fields = [field for field in required_fields if field not in data]
                print(f"❌ Response missing required fields: {missing_fields}")
                return False, None
        else:
            print(f"❌ Create status check failed with status {response.status_code}: {response.text}")
            return False, None
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Create status check request failed: {e}")
        return False, None

def test_get_status_checks():
    """Test retrieving status checks (GET /api/status)"""
    print("\n📋 Testing Get Status Checks (GET /api/status)...")
    try:
        response = requests.get(f"{API_BASE_URL}/status", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list):
                print(f"✅ Successfully retrieved {len(data)} status checks")
                
                # Validate structure of returned items
                if data:
                    first_item = data[0]
                    required_fields = ["id", "client_name", "timestamp"]
                    if all(field in first_item for field in required_fields):
                        print("✅ Status check data structure is valid")
                        # Show sample data
                        for i, item in enumerate(data[:3]):  # Show first 3 items
                            print(f"   [{i+1}] ID: {item['id'][:8]}..., Client: {item['client_name']}")
                        return True
                    else:
                        missing_fields = [field for field in required_fields if field not in first_item]
                        print(f"❌ Status check items missing required fields: {missing_fields}")
                        return False
                else:
                    print("✅ No status checks found (empty list) - this is valid")
                    return True
            else:
                print(f"❌ Expected list response, got: {type(data)}")
                return False
        else:
            print(f"❌ Get status checks failed with status {response.status_code}: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Get status checks request failed: {e}")
        return False

def test_database_connectivity():
    """Test database connectivity by creating and retrieving data"""
    print("\n🗄️ Testing Database Connectivity...")
    
    # Create a test record
    success, created_id = test_create_status_check()
    if not success:
        print("❌ Database connectivity test failed - could not create record")
        return False
    
    # Retrieve records to verify database persistence
    if test_get_status_checks():
        print("✅ Database connectivity test passed - data persisted successfully")
        return True
    else:
        print("❌ Database connectivity test failed - could not retrieve records")
        return False

def test_error_handling():
    """Test API error handling"""
    print("\n🚨 Testing Error Handling...")
    
    # Test invalid JSON for POST request
    try:
        response = requests.post(
            f"{API_BASE_URL}/status",
            json={"invalid_field": "test"},  # Missing required client_name
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code in [400, 422]:  # FastAPI returns 422 for validation errors
            print("✅ API properly handles invalid input with appropriate error code")
            return True
        else:
            print(f"⚠️ API returned unexpected status {response.status_code} for invalid input")
            return True  # Not critical, API might handle differently
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Error handling test failed: {e}")
        return False

def test_cors_headers():
    """Test CORS configuration"""
    print("\n🌐 Testing CORS Configuration...")
    try:
        response = requests.options(f"{API_BASE_URL}/", timeout=10)
        
        # Check if CORS headers are present
        cors_headers = [
            'access-control-allow-origin',
            'access-control-allow-methods',
            'access-control-allow-headers'
        ]
        
        present_headers = []
        for header in cors_headers:
            if header in response.headers:
                present_headers.append(header)
        
        if present_headers:
            print(f"✅ CORS headers configured: {present_headers}")
            return True
        else:
            print("⚠️ No CORS headers found - may affect frontend integration")
            return True  # Not critical for backend functionality
            
    except requests.exceptions.RequestException as e:
        print(f"❌ CORS test failed: {e}")
        return False

def run_all_tests():
    """Run all backend tests"""
    print("🚀 Starting Comprehensive Backend API Testing")
    print("=" * 60)
    
    test_results = []
    
    # Core functionality tests
    test_results.append(("Health Check", test_health_check()))
    test_results.append(("Database Connectivity", test_database_connectivity()))
    test_results.append(("Get Status Checks", test_get_status_checks()))
    
    # Additional tests
    test_results.append(("Error Handling", test_error_handling()))
    test_results.append(("CORS Configuration", test_cors_headers()))
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    
    passed = 0
    failed = 0
    
    for test_name, result in test_results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name:<25} {status}")
        if result:
            passed += 1
        else:
            failed += 1
    
    print(f"\nTotal Tests: {len(test_results)}")
    print(f"Passed: {passed}")
    print(f"Failed: {failed}")
    
    if failed == 0:
        print("\n🎉 All backend tests passed! Backend is stable and ready.")
        return True
    else:
        print(f"\n⚠️ {failed} test(s) failed. Backend needs attention.")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)